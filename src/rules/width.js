/**
 * order 10
 */
import { PREFIX, UNIT_ENUM_STR, UNIT_ENUM, NONNEGATIVE_NUMBER_REGEX_STR, toRegexStr } from '../constant';
import { getConfig } from '../config';
const ruleName = 'width'; //属性名称
const className = ['width', 'w', 'x'];

export default {
	regExp() {
		const prefix = getConfig(PREFIX);
		return new RegExp(`^${prefix}-(${toRegexStr(className)})-(?<num>${NONNEGATIVE_NUMBER_REGEX_STR})(?<unit>${UNIT_ENUM_STR})?$`);
	},
	render({ groups }) {
		const { num, unit } = groups;
		return { name: 'width', order: 10, num, css: [`width: ${num}${unit}`] };
	},
	snippets(config) {
		let snippets = {};
		for (const name of className) {
			for (const unit of [undefined, ...UNIT_ENUM]) {
				snippets[`${ruleName == name ? ruleName : name + '(' + ruleName + ')'}:${unit ? unit : ''}`] = {
					prefix: `${config.prefix}-${name}-${unit ? unit : ''}`,
					body: `${config.prefix}-${name}-$1${unit ? unit : ''}`,
				};
			}
		}
		return snippets;
	},
};
