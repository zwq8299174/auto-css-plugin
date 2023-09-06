/**
 * order 600
 */
import { PREFIX, toRegexStr, genSnippets } from '../constant';
import { getConfig } from '../config';
const ruleName = 'border-style'; //属性名称
const className = ['border-style', 'bs'];

//none|hidden|dotted|dashed|solid|double|groove|ridge|inset|outset|inherit
const borderStyleEnum = ['none', 'hidden', 'dotted', 'dashed', 'solid', 'double', 'groove', 'ridge', 'inset', 'outset', 'inherit'];

export default {
	regExp() {
		const prefix = getConfig(PREFIX);
		return new RegExp(`^${prefix}-(${toRegexStr(className)})-(?<value>${toRegexStr(borderStyleEnum)})$`);
	},
	render({ groups }) {
		const { value } = groups;
		return {
			name: 'borderStyle',
			order: 600,
			css: [`border-style: ${value}`],
		};
	},
	snippets(config) {
		return genSnippets(ruleName, config.prefix, className, borderStyleEnum);
	},
};
