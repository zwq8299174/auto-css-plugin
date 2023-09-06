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
		return new RegExp(`^${prefix}-transition-((?<property>${TRANSITION_PROPERTY_ENUM_STR})-)((?<timing>${TIMING_FUNCTION_ENUM_STR})-)?(?<num>${NONNEGATIVE_NUMBER_REGEX_STR})?$`);
	},
	render({ groups }) {
		let { property, timing, num } = groups;
		return {
			name: 'transition',
			order: 1100,
			num,
			css: getCss(property, timing, num),
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
