/**
 * order 320
 */
import { PREFIX, toRegexStr, genSnippets } from '../constant';
import { getConfig } from '../config';
const ruleName = 'text-align'; //属性名称
const className = ['text-align', 'text'];

export default {
	regExp() {
		const prefix = getConfig(PREFIX);
		return new RegExp(`^${prefix}-(${toRegexStr(className)})-(?<value>start|end|left|right|center|justify|match-parent)$`);
	},
	render({ groups }) {
		const { value } = groups;
		return {
			name: 'textAlign',
			order: 320,
			css: [`text-align: ${value}`],
		};
	},
	snippets(config) {
		return genSnippets(ruleName, config.prefix, className, ['start', 'end', 'left', 'right', 'center', 'justify', 'match-parent']);
	},
};
