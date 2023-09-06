/**
 * order 660
 */

import { PREFIX } from '../constant';
import { getConfig } from '../config';

export default {
	regExp() {
		const prefix = getConfig(PREFIX);
		return new RegExp(`^${prefix}-(clear|clearfix)$`);
	},
	render() {
		return {
			name: 'clearfix',
			order: 660,
			css: [`content: ''`, 'display: block', 'clear: both'],
			pseudoEle: 'after',
		};
	},
	snippets(config) {
		return {
			//代码提示
			clear: {
				prefix: `${config.prefix}-clear`, //代码提示触发前缀
				body: `${config.prefix}-clear`, //代码提示内容
			},
			clearfix: {
				prefix: `${config.prefix}-clearfix`, //代码提示触发前缀
				body: `${config.prefix}-clearfix`, //代码提示内容
			},
		};
	},
};
