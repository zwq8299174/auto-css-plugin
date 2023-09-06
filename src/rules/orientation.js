/**
 * order 310
 */

import { PREFIX, UNIT_ENUM_STR, UNIT_ENUM, NONNEGATIVE_NUMBER_REGEX_STR, DIRECTION_MAP } from '../constant';
import { getConfig } from '../config';

export default {
	regExp() {
		const prefix = getConfig(PREFIX);
		return new RegExp(`^${prefix}-(?<direction>[trblxy]|top|right|bottom|left)-(?<isMinus>m-)?(?<num>${NONNEGATIVE_NUMBER_REGEX_STR})(?<unit>${UNIT_ENUM_STR})?$`);
	},
	render({ groups }) {
		let { direction, isMinus, num, unit } = groups;
		if (isMinus) {
			num = 0 - num;
		}
		// is only t r b l
		if (direction.length === 1) {
			direction = DIRECTION_MAP.get(direction)[0];
		}

		return { name: 'orientation', order: 310, num, css: [`${direction}: ${num}${unit}`] };
	},
	snippets(config) {
		let snippets = {};
		for (const name of ['top', 'right', 'bottom', 'left', 'x', 'y', 't', 'r', 'b', 'l']) {
			for (const unit of [undefined, ...UNIT_ENUM]) {
				snippets[`${name}:${unit ? unit : ''}`] = {
					prefix: `${config.prefix}-${name}-${unit ? unit : ''}`,
					body: `${config.prefix}-${name}-$1${unit ? unit : ''}`,
				};
			}
		}
		return snippets;
	},
};
