/**
 * order 581
 */
import { PREFIX, GAP_ENUM_STR, GAP_ENUM, NONNEGATIVE_NUMBER_REGEX_STR, UNIT_ENUM_STR, UNIT_ENUM, toRegexStr } from '../constant';
import { getConfig } from '../config';
const ruleName = 'row-gap'; //属性名称
const className = ['row-gap', 'rg'];

export default {
	regExp() {
		const prefix = getConfig(PREFIX);
		return new RegExp(`^${prefix}-(${toRegexStr(className)})-(((?<num>${NONNEGATIVE_NUMBER_REGEX_STR})(?<unit>${UNIT_ENUM_STR})?)|(?<value>${GAP_ENUM_STR}))$`);
	},
	render({ groups }) {
		let { num = Infinity, unit, value } = groups;
		if (!value) {
			value = num + unit;
		}
		return { name: 'row-gap', order: 581, num, css: [`row-gap: ${value}`] };
	},
	snippets(config) {
		let snippets = {};
		for (const name of className) {
			for (const it of [undefined, ...UNIT_ENUM, ...GAP_ENUM]) {
				const unit = UNIT_ENUM.includes(it) ? it : undefined;
				if (unit) {
					snippets[`${ruleName == name ? ruleName : name + '(' + ruleName + ')'}:${unit}`] = {
						prefix: `${config.prefix}-${name}-${unit}`,
						body: `${config.prefix}-${name}-$1${unit}`,
					};
				} else {
					snippets[`${ruleName == name ? ruleName : name + '(' + ruleName + ')'}:${it ? it : ''}`] = {
						prefix: `${config.prefix}-${name}-${it ? it : ''}`,
						body: `${config.prefix}-${name}-${it ? it : ''}`,
					};
				}
			}
		}
		return snippets;
	},
};
