/**
 * order 360
 */

import { PREFIX, toRegexStr, genSnippets } from '../constant';
import { getConfig } from '../config';
const ruleName = 'font-weight'; //属性名称
const className = ['font-weight', 'fw'];

export default {
	regExp() {
		const prefix = getConfig(PREFIX);
		return new RegExp(`^${prefix}-(${toRegexStr(className)})-(?<value>[1-9]00|bold|bolder|inherit|initial|lighter|normal|unset)$`);
	},
	render({ groups }) {
		const { value } = groups;
		return {
			name: 'fontWeight',
			order: 360,
			css: [`font-weight: ${value}`],
		};
	},
	snippets(config) {
		return genSnippets(ruleName, config.prefix, className, ['100', '200', '300', '400', '500', '600', '700', '800', '900', 'bold', 'bolder', 'inherit', 'initial', 'lighter', 'normal', 'unset']);
	},
};
