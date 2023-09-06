/**
 * order Infinity
 */

import { getColorsKey, textToRgbText } from '../color-utils';
import { PREFIX, toRegexStr, genSnippets } from '../constant';
import { getConfig } from '../config';

const className = ['color', 'c', 'bg', 'background', 'border-color', 'border-c'];

export default {
	regExp(){
        const prefix = getConfig(PREFIX);
        return new RegExp(`^${prefix}-(?<type>${toRegexStr(className)})-(?<color>(#?([a-fA-F0-9]{8}$|[a-fA-F0-9]{6}|[a-fA-F0-9]{3}))|${getColorsKey().join('|')})(-(?<opacity>1|([1-9]\\d?)))?$`);
    },
	render({ groups }) {
		let { type, color, opacity } = groups;
		opacity = opacity === undefined ? 1 : (opacity * 0.01).toFixed(2);
		color = textToRgbText(color, opacity); // rgba(xxxx) or transparent
		let prefix = '';
		switch (type) {
			case 'c':
				prefix = 'color';
				break;
			case 'color':
				prefix = 'color';
				break;
			case 'bg':
				prefix = 'background-color';
				break;
			case 'background':
				prefix = 'background-color';
				break;
			case 'border-c':
			case 'border-color':
				prefix = 'border-color';
				break;
			default:
				prefix = type;
				break;
		}
		return { name: 'color', order: Infinity, css: [`${prefix}: ${color}`] };
	},
	snippets: (config) => {
		return {
			...genSnippets('color', config.prefix, ['color', 'c'], [undefined, ...Object.keys(config.colors)]),
			...genSnippets('background', config.prefix, ['bg', 'background'], [undefined, ...Object.keys(config.colors)]),
			...genSnippets('border-color', config.prefix, ['border-c', 'border-color'], [undefined, ...Object.keys(config.colors)]),
		};
	},
};
