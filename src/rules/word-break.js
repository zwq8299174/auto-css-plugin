/**
 * order 350
 */
import { PREFIX, genSnippets } from '../constant';
import { getConfig } from '../config';

export default {
	regExp() {
		const prefix = getConfig(PREFIX);
		return new RegExp(`^${prefix}-word-break-(?<value>normal|break-all|keep-all|break-word|inherit|initial|unset)$`);
	},
	render({ groups }) {
		const { value } = groups;
		return {
			name: 'wordBreak',
			order: 350,
			css: [`word-break: ${value}`],
		};
	},
	snippets(config) {
		return genSnippets('word-break', config.prefix, ['word-break'], ['normal', 'break-all', 'keep-all', 'break-word', 'inherit', 'initial', 'unset']);
	},
};
