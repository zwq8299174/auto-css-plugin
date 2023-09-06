/**
 * order 340
 */
import { PREFIX, CURSOR_ENUM_STR, CURSOR_ENUM, genSnippets } from '../constant';
import { getConfig } from '../config';
const ruleName = 'cursor'; //属性名称

export default {
	regExp() {
		const prefix = getConfig(PREFIX);
		return new RegExp(`^${prefix}-cursor-(?<value>${CURSOR_ENUM_STR})$`);
	},
	render({ groups }) {
		const { value } = groups;
		return {
			name: 'cursor',
			order: 340,
			css: [`cursor: ${value}`],
		};
	},
	snippets(config) {
		return genSnippets(ruleName, config.prefix, ['cursor'], CURSOR_ENUM);
	},
};
