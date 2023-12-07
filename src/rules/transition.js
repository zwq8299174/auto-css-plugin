/**
 * order 1100
 */
import { PREFIX, TRANSITION_PROPERTY_ENUM_STR, TIMING_FUNCTION_ENUM_STR, NONNEGATIVE_NUMBER_REGEX_STR } from '../constant';
import { getConfig } from '../config';

function getCss(property, timing, num) {
	return [`transition: ${property ? property : 'all'} ${timing ? timing : 'ease'} ${num}s`];
}

export default {
	regExp() {
		const prefix = getConfig(PREFIX);
		return new RegExp(`^${prefix}-transition-((?<property>${TRANSITION_PROPERTY_ENUM_STR})-)((?<timing>${TIMING_FUNCTION_ENUM_STR})-)?(?<value>${NONNEGATIVE_NUMBER_REGEX_STR})?$`);
	},
	render({ groups }) {
		let { property, timing, value } = groups;
		return {
			name: 'transition',
			order: 1100,
			num: value,
			css: getCss(property, timing, value),
		};
	},
	snippets(config) {
		return {
			transition: {
				prefix: `${config.prefix}-transition-`,
				body: `${config.prefix}-transition-$1`,
			},
		};
	},
};
