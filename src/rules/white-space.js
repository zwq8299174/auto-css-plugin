/**
 * order 360
 */
import { PREFIX } from '../constant';
import { getConfig } from '../config';

export default {
	regExp() {
		const prefix = getConfig(PREFIX);
		return new RegExp(`^${prefix}-white-space-(?<value>normal|nowrap|pre|pre-line|pre-wrap|inherit|initial|unset)$`);
	},
	render({ groups }) {
		const { value } = groups;
		return {
			name: 'whiteSpace',
			order: 360,
			css: [`white-space: ${value}`],
		};
	},
	snippets(config) {
		let snippets = {};
		for (const prop of ['normal', 'nowrap', 'pre', 'pre-line', 'pre-wrap', 'inherit', 'initial', 'unset']) {
			snippets[`white-space:${prop}`] = {
				prefix: `${config.prefix}-white-space-${prop}`,
				body: `${config.prefix}-white-space-$1${prop}`,
			};
		}
		return snippets;
	},
};
