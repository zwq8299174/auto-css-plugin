/**
 * order 410
 */
import { PREFIX, UNIT_ENUM_STR, UNIT_ENUM, NONNEGATIVE_NUMBER_REGEX_STR } from '../constant';
import { getConfig } from '../config';

export default {
	regExp() {
		const prefix = getConfig(PREFIX);
		return new RegExp(`^${prefix}-letter-spacing-(?<isMinus>m-)?(?<num>${NONNEGATIVE_NUMBER_REGEX_STR})(?<unit>${UNIT_ENUM_STR})?$`);
	},
	render({ groups }) {
		let { isMinus, num, unit } = groups;
		if (isMinus) {
			num = 0 - num;
		}
		return { name: 'letterSpacing', order: 410, num, css: [`letter-spacing: ${num}${unit}`] };
	},
	snippets(config) {
		let snippets = {};
		for (const unit of UNIT_ENUM) {
			snippets[`letter-spacing:${unit ? unit : ''}`] = {
				prefix: `${config.prefix}-letter-spacing-${unit ? unit : ''}`,
				body: `${config.prefix}-letter-spacing-$1${unit ? unit : ''}`,
			};
		}
		return snippets;
	},
};
