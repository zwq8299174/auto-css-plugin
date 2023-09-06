/**
 * order 370
 */
import { PREFIX, UNIT_ENUM_STR, UNIT_ENUM, NONNEGATIVE_NUMBER_REGEX_STR, toRegexStr, genSnippets } from '../constant';
import { getConfig } from '../config';
const ruleName = 'font-size'; //属性名称
const className = ['font', 'fs', 'f','font-size'];

export default {
	regExp(){
        const prefix = getConfig(PREFIX);
        return new RegExp(`^${prefix}-(${toRegexStr(className)})-(?<num>${NONNEGATIVE_NUMBER_REGEX_STR})(?<unit>${UNIT_ENUM_STR})?$`);
    },
	render({ groups }) {
		const { num, unit } = groups;
		return { name: 'fontSize', order: 370, num, css: [`font-size: ${num}${unit}`] };
	},
	snippets(config){
        return genSnippets(ruleName, config.prefix, className, [undefined, ...UNIT_ENUM]);
    },
};
