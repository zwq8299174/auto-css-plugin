/**
 * order Infinity
 */

import { PREFIX, genSnippets } from '../constant';
import { getConfig } from '../config';

export default {
	regExp() {
		const prefix = getConfig(PREFIX);
		return new RegExp(`^${prefix}-(object-fit)-(?<value>fill|contain|cover|none|scale-down|inherit|initial|revert|unset)$`);
	},
	render({ groups }) {
		const { value } = groups;
		return {
			name: 'objectFit',
			order: Infinity,
			css: [`object-fit: ${value}`],
		};
	},
	snippets(config) {
		return genSnippets('object-fit', config.prefix, ['object-fit'], ['fill', 'contain', 'cover', 'none', 'scale-down', 'inherit', 'initial', 'revert', 'unset']);
	},
};
