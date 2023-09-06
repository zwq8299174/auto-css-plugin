/**
 * order 358
 */
import { PREFIX } from '../constant';
import { getConfig } from '../config';
export default {
	regExp() {
		const prefix = getConfig(PREFIX);
		return new RegExp(`^${prefix}-bold$`);
	},
	render() {
		return {
			name: 'bold',
			order: 358,
			css: ['font-weight: bold'],
		};
	},
	snippets(config) {
		return {
			//代码提示
			bold: {
				prefix: `${config.prefix}-bold`, //代码提示触发前缀
				body: `${config.prefix}-bold`, //代码提示内容
			},
		};
	},
};
