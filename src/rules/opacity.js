/**
 * order Infinity
 */
import { PREFIX, NONNEGATIVE_NUMBER_REGEX_STR } from '../constant';
import { getConfig } from '../config';
export default {
	regExp() {
		const prefix = getConfig(PREFIX);
		return new RegExp(`^${prefix}-opacity-(?<value>${NONNEGATIVE_NUMBER_REGEX_STR})$`);
	},
	render({ groups }) {
		const { value } = groups;
		return { name: 'opacity', order: Infinity, num: value, css: [`opacity: ${Number((value / 100).toFixed(2))}`] };
	},
	snippets(config) {
		return {
			//代码提示
			opacity: {
				prefix: `${config.prefix}-opacity-`, //代码提示触发前缀
				body: `${config.prefix}-opacity-$1`, //代码提示内容
			},
		};
	},
};
