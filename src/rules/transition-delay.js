/**
 * order 1150
 */

import { PREFIX, NONNEGATIVE_NUMBER_REGEX_STR } from '../constant';
import { getConfig } from '../config';

export default {
	regExp() {
		const prefix = getConfig(PREFIX);
		return new RegExp(`^${prefix}-delay-(?<value>${NONNEGATIVE_NUMBER_REGEX_STR})$`);
	},
	render({ groups }) {
		let { value } = groups;
		return {
			name: 'transition-delay',
			order: 1150,
			num: value,
			css: [`transition-delay: ${value}s`],
		};
	},
	snippets(config) {
		return {
			delay: {
				prefix: `${config.prefix}-delay-`,
				body: `${config.prefix}-delay-$1`,
			},
		};
	},
};
