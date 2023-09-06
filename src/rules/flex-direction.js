/**
 * order 180
 */

import { PREFIX, genSnippets } from '../constant';
import { getConfig } from '../config';

const FLEX_MAP = new Map();
FLEX_MAP.set(undefined, ['']); // FLEX
FLEX_MAP.set('row', ['row']);
FLEX_MAP.set('col', ['column']);
FLEX_MAP.set('column', ['column']);
FLEX_MAP.set('row-reverse', ['row-reverse']);
FLEX_MAP.set('column-reverse', ['column-reverse']);
FLEX_MAP.set('col-reverse', ['column-reverse']);

const FLEX_ARR = [...FLEX_MAP.keys()],
	FLEX_REG_STR = FLEX_ARR.filter((v) => v).join('|');

function getCss(value) {
	return FLEX_MAP.get(value).reduce(
		(t, c) => {
			if (c) {
				return [...t, `flex-direction: ${c}`];
			} else {
				return [...t];
			}
		},
		['display: flex'],
	);
}

export default {
	regExp(){
        const prefix = getConfig(PREFIX);
        return new RegExp(`^${prefix}-flex-(?<value>${FLEX_REG_STR})$`)
    },
	render({ groups }) {
		const { value } = groups;
		return {
			name: 'flex',
			order: 180,
			css: getCss(value),
		};
	},
	snippets(config){
        return genSnippets('flex', config.prefix, ['flex'], FLEX_ARR);
    },
};
