/**
 * order 580
 */

import { PREFIX, GAP_ENUM_STR, GAP_ENUM, NONNEGATIVE_NUMBER_REGEX_STR, UNIT_ENUM_STR, UNIT_ENUM } from '../constant';
import { getConfig } from '../config';

export default {
	regExp() {
		const prefix = getConfig(PREFIX);
		return new RegExp(`^${prefix}-gap-(((?<num>${NONNEGATIVE_NUMBER_REGEX_STR})(?<unit>${UNIT_ENUM_STR})?)|(?<value>${GAP_ENUM_STR}))$`);
	},
	render({ groups }) {
		let { num = Infinity, unit, value } = groups;
		if (!value) {
			value = num + unit;
		}
		return { name: 'gap', order: 580, num, css: [`column-gap: ${value}`, `row-gap: ${value}`] };
	},
	snippets(config) {
		let snippets = {};
		for (const it of [undefined, ...UNIT_ENUM, ...GAP_ENUM]) {
			const unit = UNIT_ENUM.includes(it) ? it : undefined;
			if (unit) {
				snippets[`gap:${unit}`] = {
					prefix: `${config.prefix}-gap-${unit}`,
					body: `${config.prefix}-gap-$1${unit}`,
				};
			} else {
				snippets[`gap:${it ? it : ''}`] = {
					prefix: `${config.prefix}-gap-${it ? it : ''}`,
					body: `${config.prefix}-gap-${it ? it : ''}`,
				};
			}
		}
		return snippets;
	},
};
