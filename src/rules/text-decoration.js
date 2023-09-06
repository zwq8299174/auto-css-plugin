/**
 * order 420
 */
import { PREFIX, toRegexStr, genSnippets } from '../constant';
import { getConfig } from '../config';
const ruleName = 'text-decoration'; //属性名称
const className = ['text-decoration', 'text'];

export default {
	regExp(){
        const prefix = getConfig(PREFIX);
        return new RegExp(`^${prefix}-(${toRegexStr(className)})-(?<value>none|underline|overline|line-through|blink|inherit)$`);
    },
	render({ groups }) {
		const { value } = groups;
		return {
			name: 'textDecoration',
			order: 420,
			css: [`text-decoration: ${value}`],
		};
	},
	snippets(config){
        return genSnippets(ruleName, config.prefix, className, ['none', 'underline', 'overline', 'line-through', 'blink', 'inherit'])
    },
};
