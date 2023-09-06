/**
 * order 450
 */
import { PREFIX } from '../constant';
import { getConfig } from '../config';

export default {
	regExp() {
		const prefix = getConfig(PREFIX);
		return new RegExp(`^${prefix}-text-normal$`);
	},
	render() {
		return {
			name: 'text-normal',
			order: 450,
			css: ['font-weight: normal', 'font-style: normal', 'text-decoration: none'],
		};
	},
	snippets(config) {
		return {
			//代码提示
			'啥样式都没有': {
				prefix: `${config.prefix}-text-normal`, //代码提示触发前缀
				body: `${config.prefix}-text-normal`, //代码提示内容
			},
		};
	},
};
