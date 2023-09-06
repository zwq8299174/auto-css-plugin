/**
 * order 520 460 + 60
 */
import { UNIT_ENUM_STR, DIRECTION_MAP, NONNEGATIVE_NUMBER_REGEX_STR, PREFIX, toRegexStr, genSnippets, UNIT_ENUM } from '../constant';
import { getDirectionOrder } from '../utils/index';

import { getConfig } from '../config';
import { BORDER_COLOR } from '../constant';
const ruleName = 'border-width'; //属性名称
const className = ['border', 'border-width', 'border-w'];

const getOrder = (direction) => getDirectionOrder(460, direction);

function getCss(direction, num, unit) {
	return DIRECTION_MAP.get(direction).reduce((t, c) => {
		if (c) {
			return [...t, `border-${c}-width: ${num}${unit}`, `border-${c}-style: solid`, `border-${c}-color: ${getConfig(BORDER_COLOR)}`];
		} else {
			return [...t, `border-width: ${num}${unit}`, 'border-style: solid', `border-color: ${getConfig(BORDER_COLOR)}`];
		}
	}, []);
}

export default {
	regExp() {
		const prefix = getConfig(PREFIX);
		return new RegExp(`^${prefix}-(${toRegexStr(className)})-((?<direction>[trblxy]|top|right|bottom|left)-)?(?<num>${NONNEGATIVE_NUMBER_REGEX_STR})(?<unit>${UNIT_ENUM_STR})?$`);
	},
	render({ groups }) {
		const { direction, num, unit } = groups;
		return {
			name: direction ? `border-${direction}` : 'border',
			order: getOrder(direction),
			num,
			css: getCss(direction, num, unit),
		};
	},
	snippets(config) {
		return genSnippets(ruleName, config.prefix, className, [undefined, ...DIRECTION_MAP.keys()], [undefined, ...UNIT_ENUM]);
	},
};
