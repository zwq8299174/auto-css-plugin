// 用来去重
import * as rules from './rules/index';
import { pushPreObj, pushQuery } from './pre-render';
import { GLOB_REG, MODIFY_RULES, BASE_MEDIA_QUERY_KEY, MEDIA_QUERIES, PSEUDO_STR, TO_ANY, UNIT_ENUM_STR, NONNEGATIVE_NUMBER_REGEX_STR, DIRECTION_MAP } from './constant';
import { getConfig, getUnit } from './config';
import { toAny, isFunction, isObject } from './utils/index';
import { textToRgbText, getColorsKey, getColors } from './color-utils';
const modifyUtils = { textToRgbText, getColorsKey, getColors, UNIT_ENUM_STR, NONNEGATIVE_NUMBER_REGEX_STR, DIRECTION_MAP };
const cssSet = new Set();
const handleCssPipe = new Set();

export function filterClassNames(sourceStr) {
	const classNameList = sourceStr.match(getConfig(GLOB_REG));
	if (classNameList) {
		classNameList.forEach((hasClassNameStr) => {
			// 替换我们规则中不会出现的字符 替换成空格 注意前后必须有空格 可能导致拼接合法 会多生成几条 无所谓
			const className = hasClassNameStr.replace(/[^a-zA-Z0-9-@:#.]/g, ' ');
			className.split(' ').forEach(filterClass);
		});
	}
	return '';
}

export function filterClassNamesByScriptUse(sourceStr) {
	const classNameList = [];
	const regex = /(?:(?:class=(["']))([\s\S]*?)(?:\1))/gi;
	let current = regex.exec(sourceStr);
	while (current) {
		classNameList.push(current[2]);
		current = regex.exec(sourceStr);
	}
	if (classNameList) {
		classNameList.forEach((hasClassNameStr) => {
			// 替换我们规则中不会出现的字符 替换成空格 注意前后必须有空格 可能导致拼接合法 会多生成几条 无所谓
			const className = hasClassNameStr.replace(/[^a-zA-Z0-9-@:#.]/g, ' ');
			className.split(' ').forEach(filterClass);
		});
	}
	return '';
}

export function filterClass(classStr) {
	if (cssSet.has(classStr)) {
		return null;
	}
	let query;
	let pseudo;
	let source = classStr;
	const queryNames = [...BASE_MEDIA_QUERY_KEY, ...Object.keys(getConfig(MEDIA_QUERIES))];
	const toAnyConfig = getConfig(TO_ANY);
	const is2any = !!toAnyConfig;
	if (/[@:]/.test(classStr)) {
		const queryAndPesudoRegex = new RegExp(`^(?:(?<query>${queryNames.join('|')})@)?(?:(?<pseudo>${PSEUDO_STR}):)?(?<source>[^:@]+)$`);
		const res = classStr.match(queryAndPesudoRegex);
		if (!res) {
			return null;
		}
		const { groups = null } = res;
		if (!groups) {
			return null;
		}
		({ query, pseudo, source } = groups);
	}

	cssSet.add(classStr);
	const ruleList = Object.values({ ...rules, ...getConfig(MODIFY_RULES) });
	for (let i = 0; i < ruleList.length; i++) {
		let rule = ruleList[i];
		rule = isFunction(rule) ? rule(modifyUtils) : rule;
		const reg = isFunction(rule.regExp) ? rule.regExp() : rule.regExp;
		const res = source.match(reg);
		if (res !== null) {
			const { unit, num } = res.groups || {};
			const unit1 = getUnit(num, unit);

			if (isObject(res.groups)) {
				if (is2any && num) {
                    if(isFunction(toAnyConfig)){
                        Object.assign(res.groups, toAnyConfig(res.groups));
                    }else{
                        Object.assign(res.groups, {
                            num: toAny(num),
                            unit: toAnyConfig.unit,
                        });
                    }
				} else {
					Object.assign(res.groups, { unit: unit1 });
				}
			}

			let renderResult = rule.render(res);
			handleCssPipe.forEach((handle) => {
				renderResult = handle(renderResult);
			});

			const params = {
				classStr,
				...renderResult,
				pseudo,
			};

			if (query) {
				pushQuery(query, params);
			} else {
				pushPreObj(params);
			}
			break;
		}
	}
}
