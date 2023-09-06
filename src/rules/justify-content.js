/**
 * order 210
 */
import { PREFIX, JUSTIFY_CONTENT_ENUM_STR, toRegexStr, genSnippets } from '../constant';
import { getConfig } from '../config';
const ruleName = 'justify-content'; //属性名称
const className = ['justify-content', 'jc', 'row'];

export default {
	regExp(){
        const prefix = getConfig(PREFIX);
        return new RegExp(`^${prefix}-(${toRegexStr(className)})-(?<justify>${JUSTIFY_CONTENT_ENUM_STR})$`);
    },
	render({ groups }) {
		const { justify } = groups;
		return { name: 'justifyContent', order: 210, css: [`justify-content: ${justify}`] };
	},
	snippets(config){
        return genSnippets(ruleName, config.prefix, className, JUSTIFY_CONTENT_ENUM_STR)
    },
};
