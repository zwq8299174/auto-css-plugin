/**
 * order 41
 */
import { PREFIX, UNIT_ENUM_STR, UNIT_ENUM, NONNEGATIVE_NUMBER_REGEX_STR, toRegexStr } from '../constant';
import { getConfig } from '../config';
const ruleName = 'min-width'; //属性名称
const className = ['min-width', 'min-w'];

export default {
	regExp() {
		const prefix = getConfig(PREFIX);
		return new RegExp(`^${prefix}-(${toRegexStr(className)})-(?<num>${NONNEGATIVE_NUMBER_REGEX_STR})(?<unit>${UNIT_ENUM_STR})?$`);
	},
	render({ groups }) {
		const { num, unit } = groups;
		return { name: 'min-width', order: 41, num, css: [`min-width: ${num}${unit}`] };
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
