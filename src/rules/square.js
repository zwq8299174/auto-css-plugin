/**
 * order 50
 */
import { PREFIX, UNIT_ENUM_STR, UNIT_ENUM, NONNEGATIVE_NUMBER_REGEX_STR } from '../constant';
import { getConfig } from '../config';

export default {
	className: 'square',
	regExp() {
		const prefix = getConfig(PREFIX);
		return new RegExp(`^${prefix}-square-(?<num>${NONNEGATIVE_NUMBER_REGEX_STR})(?<unit>${UNIT_ENUM_STR})?$`);
	},
	render({ groups }) {
		const { num, unit } = groups;
		return { name: 'square', order: 50, num, css: [`width: ${num}${unit}`, `height: ${num}${unit}`] };
	},
	snippets(config) {
		let snippets = {};
		for (const unit of [undefined, ...UNIT_ENUM]) {
			snippets[`方形:${unit ? unit : ''}`] = {
				prefix: `${config.prefix}-square-${unit ? unit : ''}`,
				body: `${config.prefix}-square-$1${unit ? unit : ''}`,
			};
		}
		return snippets;
	},
};
