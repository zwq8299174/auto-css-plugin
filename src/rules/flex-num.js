/**
 * order 250
 */

import { PREFIX, genSnippets } from '../constant';
import { getConfig } from '../config';

export default {
	regExp(){
        const prefix = getConfig(PREFIX);
        return new RegExp(`^${prefix}-flex-(?<value>null|auto|none|(0|[1-9]\d*))$`);
    },
	render({ groups }) {
		const { value } = groups;
		return { name: 'flex', order: 250, css: [`flex: ${value}`] };
	},
	snippets(config){
        return genSnippets('flex-num', config.prefix, ['flex'], [undefined, 'auto', 'none', '1'])
    },
};
