/**
 * order 190
 */
import { ALIGN_ITEMS_ENUM_STR, ALIGN_ITEMS_ENUM, PREFIX, toRegexStr, genSnippets } from '../constant';
import { getConfig } from '../config';
const ruleName = 'align-self'; //属性名称
const className = ['align-self', 'self', 'as'];

export default {
	regExp() {
		const prefix = getConfig(PREFIX);
		return new RegExp(`^${prefix}-(${toRegexStr(className)})-(?<align>${ALIGN_ITEMS_ENUM_STR})$`);
	},
	render({ groups }) {
		const { align } = groups;
		return { name: 'alignSelf', order: 190, css: [`align-self: ${align}`] };
	},
	snippets(config) {
		return genSnippets(ruleName, config.prefix, className, ALIGN_ITEMS_ENUM);
	},
};
