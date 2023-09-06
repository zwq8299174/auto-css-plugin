/**
 * order 280
 */
import { PREFIX, UNIT_ENUM_STR, NONNEGATIVE_NUMBER_REGEX_STR, UNIT_ENUM, genSnippets } from '../constant';
import { getConfig } from '../config';
const ruleName = 'flex-basis'; //属性名称

export default {
	regExp() {
		const prefix = getConfig(PREFIX);
		return new RegExp(`^${prefix}-flex-basis-(?<value>((?<num>${NONNEGATIVE_NUMBER_REGEX_STR})(?<unit>${UNIT_ENUM_STR})?)|initial|inherit|auto)$`);
	},
	render({ groups }) {
		let { value, num, unit } = groups;
		if (num) {
			value = `${num}${unit}`;
		}
		return {
			name: 'flexBasis',
			order: 280,
			css: [`flex-basis: ${value}`],
		};
	},
	snippets(config){
        return genSnippets(ruleName, config.prefix, ['flex-basis'], [undefined, 'initial', 'inherit', 'auto'], [undefined, ...UNIT_ENUM]);
    },
};
