/**
 * order 999
 */
import { PREFIX, toRegexStr } from '../constant';
import { getConfig } from '../config';
const className = ['index', 'z'];

export default {
	regExp() {
		const prefix = getConfig(PREFIX);
		return new RegExp(`^${prefix}-(${toRegexStr(className)})-(?<isMinus>m-)?(?<value>0|[1-9]\d*)$`);
	},
	render({ groups }) {
		let { isMinus, value } = groups;
		if (isMinus) {
			value = 0 - value;
		}
		return { name: 'zIndex', order: 999, num: value, css: [`z-index: ${value}`] };
	},
	snippets(config) {
		return {
			index: {
				prefix: `${config.prefix}-index-`,
				body: `${config.prefix}-index-$1`,
			},
			z: {
				prefix: `${config.prefix}-z-`,
				body: `${config.prefix}-z-$1`,
			},
		};
	},
};
