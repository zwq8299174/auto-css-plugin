/**
 * order 410
 */
import { PREFIX, UNIT_ENUM_STR, UNIT_ENUM, NONNEGATIVE_NUMBER_REGEX_STR, toRegexStr } from '../constant';
import { getConfig } from '../config';
const ruleName = 'letter-spacing'; //属性名称
const className = ['letter-spacing', 'ls', 'letter'];

export default {
	regExp() {
		const prefix = getConfig(PREFIX);
		return new RegExp(`^${prefix}-(${toRegexStr(className)})-(?<isMinus>m-)?(?<num>${NONNEGATIVE_NUMBER_REGEX_STR})(?<unit>${UNIT_ENUM_STR})?$`);
	},
	render({ groups }) {
		let { isMinus, num, unit } = groups;
		if (isMinus) {
			num = 0 - num;
		}
		return { name: 'letterSpacing', order: 410, num, css: [`letter-spacing: ${num}${unit}`] };
	},
	snippets(config) {
		let snippets = {};
		for (const name of className) {
			for (const unit of UNIT_ENUM) {
				snippets[`${ruleName == name ? ruleName : name + '(' + ruleName + ')'}:${unit}`] = {
					prefix: `${config.prefix}-${name}-${unit ? unit : ''}`,
					body: `${config.prefix}-${name}-$1${unit ? unit : ''}`,
				};
			}
		}
		return snippets;
	},
};
