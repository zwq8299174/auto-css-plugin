/**
 * order 240
 */

import { PREFIX, genSnippets } from '../constant';
import { getConfig } from '../config';

export default {
	regExp() {
		const prefix = getConfig(PREFIX);
		return new RegExp(`^${prefix}-flex-(?<value>nowrap|wrap|wrap-reverse)$`);
	},
	render({ groups }) {
		const { value } = groups;
		return { name: 'flexWrap', order: 240, css: [`flex-wrap: ${value}`] };
	},
	snippets(config) {
		return genSnippets('flex', config.prefix, ['flex'], ['nowrap', 'wrap', 'wrap-reverse']);
	},
};
