/**
 * order 230
 */
import { ALIGN_CONTENT_ENUM_STR, ALIGN_CONTENT_ENUM, PREFIX, toRegexStr } from '../constant';
import { getConfig } from '../config';
const ruleName = 'align-content'; //属性名称
const className = ['align-content', 'ac', 'content'];

function getValue(align) {
	if (align == 'end') {
		return 'flex-end';
	}
	if (align == 'start') {
		return 'flex-start';
	}
	if (align == 'between') {
		return 'space-between';
	}
	if (align == 'around') {
		return 'space-around';
	}
	if (align == 'evenly') {
		return 'space-evenly';
	}
	return align;
}

function getCss(align) {
	return [`align-content: ${getValue(align)}`];
}
export default {
	regExp() {
		const prefix = getConfig(PREFIX);
		return new RegExp(`^${prefix}-(${toRegexStr(className)})-(?<align>${ALIGN_CONTENT_ENUM_STR})$`);
	},
	render({ groups }) {
		const { align } = groups;
		return {
			name: 'alignContent',
			order: 230,
			css: getCss(align),
		};
	},
	snippets(config) {
		let snippets = {};
		for (const name of className) {
			for (const prop of ALIGN_CONTENT_ENUM) {
				snippets[`${ruleName == name ? ruleName : name + '(' + ruleName + ')'}:${prop}`] = {
					prefix: `${config.prefix}-${name}-${getValue(prop)}`,
					body: `${config.prefix}-${name}-${getValue(prop)}`,
				};
			}
		}
		return snippets;
	},
};
