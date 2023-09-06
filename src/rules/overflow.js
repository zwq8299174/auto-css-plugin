/**
 * order 380 - 400
 */
import { PREFIX, genSnippets } from '../constant';
import { getConfig } from '../config';

export default {
	regExp() {
		const prefix = getConfig(PREFIX);
		return new RegExp(`^${prefix}-(overflow|of)(-(?<direction>[xy]))?-(?<value>hidden|auto|visible|scroll|inherit)$`);
	},
	render({ groups }) {
		const { direction, value } = groups;
		const base = { name: 'overflow' };
		if (!direction) {
			return { ...base, order: 380, css: [`overflow: ${value}`] };
		}
		if (direction === 'x') {
			return { ...base, order: 390, css: [`overflow-x: ${value}`] };
		}
		if (direction === 'y') {
			return { ...base, order: 400, css: [`overflow-y: ${value}`] };
		}
	},
	snippets(config) {
		return {
			...genSnippets('overflow', config.prefix, ['overflow', 'of'], ['hidden', 'auto', 'visible', 'scroll', 'inherit']),
			...genSnippets('overflow-x', config.prefix, ['overflow-x', 'of-x'], ['hidden', 'auto', 'visible', 'scroll', 'inherit']),
			...genSnippets('overflow-y', config.prefix, ['overflow-y', 'of-y'], ['hidden', 'auto', 'visible', 'scroll', 'inherit']),
		};
	},
};
