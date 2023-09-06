/**
 * order 330
 */
import { PREFIX, UNIT_ENUM_STR, UNIT_ENUM, NONNEGATIVE_NUMBER_REGEX_STR, toRegexStr } from '../constant';
import { getConfig } from '../config';
const ruleName = 'line-height'; //属性名称
const className = ['line-height', 'lh'];

export default {
	regExp() {
		const prefix = getConfig(PREFIX);
		return new RegExp(`^${prefix}-(${toRegexStr(className)})-(?<value>((?<num>${NONNEGATIVE_NUMBER_REGEX_STR})(?<unit>${UNIT_ENUM_STR})?)|normal|unset|inherit|initial)$`);
	},
	render({ groups }) {
		const { value, num = Infinity, unit } = groups;
		const base = { name: 'lineHeight', order: 330 };
		if (num !== Infinity) {
			return { ...base, num, css: [`line-height: ${num}${unit}`] };
		}
		return { ...base, num, css: [`line-height: ${value}`] };
	},
	snippets(config) {
		let snippets = {};
		for (const name of className) {
			for (const it of [undefined, ...UNIT_ENUM, 'normal', 'unset', 'inherit', 'initial']) {
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
