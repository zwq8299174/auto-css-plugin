/**
 * order 612
 */

import { PREFIX } from '../constant';
import { getConfig } from '../config';

export default {
	regExp() {
		const prefix = getConfig(PREFIX);
		return new RegExp(`^${prefix}-box-sizing-(?<value>content-box|border-box)$`);
	},
	render({ groups }) {
		const { value } = groups;
		return {
			name: 'boxSizing',
			order: 612,
			css: [`box-sizing: ${value}`],
		};
	},
	snippets(config) {
		return {
			//代码提示
			'box-sizing:content-box': {
				prefix: `${config.prefix}-box-sizing-content-box`, //代码提示触发前缀
				body: `${config.prefix}-box-sizing-content-box`, //代码提示内容
				description: 'content-box',
			},
			'box-sizing:border-box': {
				prefix: `${config.prefix}-box-sizing-border-box`, //代码提示触发前缀
				body: `${config.prefix}-box-sizing-border-box`, //代码提示内容
				description: 'border-box',
			},
		};
	},
};
