/**
 * order 440
 */
import { PREFIX } from '../constant';
import { getConfig } from '../config';

export default {
	regExp() {
		const prefix = getConfig(PREFIX);
		return new RegExp(`^${prefix}-(text-align-last|text-last)-(?<value>auto|left|right|center|justify|start|end|initial|inherit)$`);
	},
	render({ groups }) {
		const { value } = groups;
		return {
			name: 'textAlignLast',
			order: 440,
			css: [`text-align-last: ${value}`],
		};
	}
};
