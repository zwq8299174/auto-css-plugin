/**
 * order 590
 */
import { PREFIX, toRegexStr } from '../constant';
import { getConfig } from '../config';
const list = ['visible', 'hidden', 'collapse', 'inherit', 'initial', 'revert', 'unset'];

export default {
	regExp(){
        const prefix = getConfig(PREFIX);
        return new RegExp(`^${prefix}-visibility-(?<value>${toRegexStr(list)})$`)
    },
	render({ groups }) {
		const { value } = groups;
		return { name: 'visibility', order: 590, css: [`visibility: ${value}`] };
	},
	snippets(config) {
		let snippets = {};
		for (const prop of list) {
			snippets[`visibility:${prop}`] = {
				prefix: `${config.prefix}-visibility-${prop}`,
				body: `${config.prefix}-visibility-$1${prop}`,
			};
		}
		return snippets;
	},
};
