/**
 * order 450
 */

import { PREFIX } from '../constant';
import { getConfig } from '../config';

export default {
	regExp() {
		const prefix = getConfig(PREFIX);
		return new RegExp(`^${prefix}-(text-)?line(-(?<value>[1-9]\d*))?$`);
	},
	render({ groups }) {
		let { value } = groups;
		const base = { name: 'line', order: 450 };
		if (Number(value) === 1) {
			value = undefined; // 和没写是一样的
		}
		if (value === undefined) {
			return {
				...base,
				num: 0,
				css: ['overflow: hidden', 'text-overflow: ellipsis', 'white-space: nowrap'],
			};
		} else {
			return {
				...base,
				num: value,
				css: ['overflow: hidden', 'text-overflow: ellipsis', 'display: -webkit-box', `-webkit-line-clamp: ${value}`, '-webkit-box-orient: vertical'],
			};
		}
	},
	snippets(config) {
		return {
			文本行数: {
				prefix: `${config.prefix}-line-`,
				body: `${config.prefix}-line-`,
			},
		};
	},
};
