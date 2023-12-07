/**
 * order 999
 */
import { PREFIX, toRegexStr, NONNEGATIVE_NUMBER_REGEX_STR } from '../constant';
import { getConfig } from '../config';
const className = ['index', 'z', 'z-index'];

export default {
	name: 'zIndex',
	regExp() {
		const prefix = getConfig(PREFIX);
		return new RegExp(`^${prefix}-(${toRegexStr(className)})-(?<value>${NONNEGATIVE_NUMBER_REGEX_STR})$`);
	},
	render({ groups }) {
		let { value } = groups;
        console.log(value);
		return { name: 'zIndex', order: 999, num:value, css: [`z-index: ${value}`] };
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
