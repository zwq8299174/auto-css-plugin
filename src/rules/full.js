/**
 * order 45
 */

import { PREFIX, PAGE_WIDTH, genSnippets } from '../constant';
import { getConfig } from '../config';

function getCss(direction, unit) {
    const pageWidth = getConfig(PAGE_WIDTH);
	if (direction == 'page') {
		return [`width: ${pageWidth}${unit}`];
	}
	if (direction == 'row') {
		return [`width: 100%`];
	}
	if (direction == 'col') {
		return [`height: 100%`];
	}
}

export default {
	regExp(){
        const prefix = getConfig(PREFIX);
        return new RegExp(`^${prefix}-full-(?<direction>page|row|col)$`);
    },
	render({ groups }) {
		const { direction, unit } = groups;
		return {
			name: 'flex',
			order: 45,
			css: getCss(direction, unit),
		};
	},
	snippets(config){
        return genSnippets('full', config.prefix, ['full'], ['page', 'row', 'col']);
    },
};
