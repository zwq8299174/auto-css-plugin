/**
 * order 530+70
 */

import { UNIT_ENUM_STR, RADIUS_DIRECTION_MAP, NONNEGATIVE_NUMBER_REGEX_STR, UNIT_ENUM, PREFIX, toRegexStr, genSnippets } from '../constant';
import { getDirectionOrder } from '../utils/index';
import { getConfig } from '../config';
const ruleName = 'border-radius'; //属性名称
const className = ['border-radius', 'radius', 'br'];

const getOrder = (direction) => getDirectionOrder(530, direction);

function getCss(direction, num, unit) {
	return RADIUS_DIRECTION_MAP.get(direction).reduce((t, c) => {
		if (c) {
			return [...t, `border-${c}-radius: ${num}${unit}`];
		} else {
			return [...t, `border-radius: ${num}${unit}`];
		}
	}, []);
}

export default {
	regExp() {
		const prefix = getConfig(PREFIX);
		return new RegExp(`^${prefix}-(${toRegexStr(className)})-((?<direction>[trbl]|top|right|bottom|left|top-left|top-right|bottom-left|bottom-right)-)?(?<num>${NONNEGATIVE_NUMBER_REGEX_STR})(?<unit>${UNIT_ENUM_STR})?$`);
	},
	render({ groups }) {
		const { direction, num, unit } = groups;
		return {
			name: direction ? `borderRadius-${direction}` : 'borderRadius',
			order: getOrder(direction),
			num,
			css: getCss(direction, num, unit),
		};
	},
	snippets(config) {
		return genSnippets(ruleName, config.prefix, className, [undefined, ...RADIUS_DIRECTION_MAP.keys()], [undefined, ...UNIT_ENUM]);
	},
};
