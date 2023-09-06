/**
 * order Infinity
 */

import { PREFIX } from '../constant';
import { getConfig } from '../config';

export default {
	regExp() {
		const prefix = getConfig(PREFIX);
		return new RegExp(`^${prefix}-order-(?<value>([1-9]?\d|100))$`);
	},
	render({ groups }) {
		const { value } = groups;
		return { name: 'order', order: Infinity, num: value, css: [`order: ${value}`] };
	},
	snippets(config) {
		return {
			//代码提示
			order: {
				prefix: `${config.prefix}-order-`, //代码提示触发前缀
				body: `${config.prefix}-order-$1`, //代码提示内容
			},
		};
	},
};
