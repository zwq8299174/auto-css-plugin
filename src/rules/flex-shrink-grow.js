/**
 * order 260-270
 */

import { PREFIX, genSnippets } from '../constant';
import { getConfig } from '../config';

export default {
	regExp() {
		const prefix = getConfig(PREFIX);
		return new RegExp(`^${prefix}-flex-(?<type>shrink|grow)-(?<value>(0|[1-9]\d*)|initial|inherit)$`);
	},
	render({ groups }) {
		const { type, value } = groups;
		return {
			name: type === 'shrink' ? 'flexShrink' : 'flexGrow',
			order: type === 'shrink' ? 260 : 270,
			css: [`flex-${type}: ${value}`],
		};
	},
	snippets(config) {
		return {
			...genSnippets('flex-grow', config.prefix, ['flex-grow'], [undefined, 'initial', 'inherit', '1']),
			...genSnippets('flex-shrink', config.prefix, ['flex-shrink'], [undefined, 'initial', 'inherit', '1']),
		};
	},
};
