/**
 * order 290
 */
import { PREFIX, DISPLAY_STR, DISPLAY_ENUM, toRegexStr, genSnippets } from '../constant';
import { getConfig } from '../config';
const ruleName = 'display'; //属性名称
const className = ['display', 'd'];

export default {
	regExp(){
        const prefix = getConfig(PREFIX);
        return new RegExp(`^${prefix}-(${toRegexStr(className)})-(?<value>${DISPLAY_STR})`);
    },
	render({ groups }) {
		const { value } = groups;
		return {
			name: 'display',
			order: 290,
			css: [`display: ${value}`],
		};
	},
	snippets(config){
        return genSnippets(ruleName, config.prefix, className, DISPLAY_ENUM);
    },
};
