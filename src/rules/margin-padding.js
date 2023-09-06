/**
 * 50 - 180 order
 */
import { PREFIX, UNIT_ENUM_STR, UNIT_ENUM, DIRECTION_MAP, NONNEGATIVE_NUMBER_REGEX_STR, toRegexStr, genSnippets } from '../constant';
import { getDirectionOrder } from '../utils/index';
import { getConfig } from '../config';
const className = ['margin', 'm', 'padding', 'p'];

function getConf(type, direction) {
	let order;
	let name = '';
	if (type === 'm' || type === 'margin') {
		order = getDirectionOrder(50, direction);
		name += 'margin';
	}
	// 单项加 60 order m-l-10 最大为50 + 60 padding 从 120 起
	if (type === 'p' || type === 'padding') {
		order = getDirectionOrder(110, direction);
		name += 'padding';
	}
	if (direction) {
		name += `-${direction}`;
	}
	return { name, order };
}

export default {
	regExp() {
		const prefix = getConfig(PREFIX);
		return new RegExp(`^${prefix}-(?<type>${toRegexStr(className)})-((?<direction>[trblxy]|top|right|bottom|left)-)?((?<auto>auto)|(?<isMinus>m-)?(?<num>${NONNEGATIVE_NUMBER_REGEX_STR})(?<unit>${UNIT_ENUM_STR})?)$`);
	},
	render({ groups }) {
		let { type, direction, isMinus, num, unit, auto } = groups;
		if (auto) {
			unit = '';
			num = 'auto';
		}
		// if has auto never has isMinus
		if (isMinus) {
			num = 0 - num;
		}
		const baseConfig = getConf(type, direction);
		if (type === 'm') {
			type = 'margin';
		}
		if (type === 'p') {
			type = 'padding';
		}
		return {
			...baseConfig,
			num,
			css: DIRECTION_MAP.get(direction).reduce((t, c) => [...t, c ? `${type}-${c}: ${num}${unit}` : `${type}: ${num}${unit}`], []),
		};
	},
	snippets(config) {
		return {
			...genSnippets('margin', config.prefix, ['margin', 'm'], [undefined, ...DIRECTION_MAP.keys()], [undefined, ...UNIT_ENUM]),
			...genSnippets('padding', config.prefix, ['padding', 'p'], [undefined, ...DIRECTION_MAP.keys()], [undefined, ...UNIT_ENUM]),
		};
	},
};
