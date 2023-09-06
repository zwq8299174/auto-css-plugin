/**
 * order 200
 */

import { PREFIX, JUSTIFY_CONTENT_ENUM_STR, ALIGN_ITEMS_ENUM_STR, JUSTIFY_CONTENT_ENUM, ALIGN_ITEMS_ENUM, genSnippets } from '../constant';
import { getConfig } from '../config';

let props = JUSTIFY_CONTENT_ENUM.map((name) => {
	let prop = '';
	for (const it of ALIGN_ITEMS_ENUM) {
		prop = name + '-' + it;
	}
	return prop;
});
//水平垂直方向简写
export default {
	regExp(){
        const prefix = getConfig(PREFIX);
        return new RegExp(`^${prefix}-flex-(?<justify>${JUSTIFY_CONTENT_ENUM_STR})-(?<align>${ALIGN_ITEMS_ENUM_STR})$`);
    },
	render({ groups }) {
		let { justify, align } = groups;
		if (justify === 'between') {
			justify = 'space-between';
		}
		if (justify === 'around') {
			justify = 'space-around';
		}
		if (justify === 'evenly') {
			justify = 'space-evenly';
		}
		return {
			name: 'flexJustAli',
			order: 200,
			css: ['display: flex', `justify-content: ${justify}`, `align-items: ${align}`],
		};
	},
	snippets(config){
        return genSnippets('justify-align', config.prefix, ['flex'], props);
    },
};
