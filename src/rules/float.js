/**
 * order 650
 */
import { PREFIX, FLOAT_ENUM_STR, FLOAT_ENUM, genSnippets } from '../constant';
import { getConfig } from '../config';

export default {
	regExp() {
		const prefix = getConfig(PREFIX);
		return new RegExp(`^${prefix}-float-(?<value>${FLOAT_ENUM_STR})$`);
	},
	render({ groups }) {
		const { value } = groups;
		return {
			name: 'float',
			order: 650,
			css: [`float: ${value}`],
		};
	},
	snippets(config) {
		return genSnippets('float', config.prefix, ['float'], FLOAT_ENUM);
	},
};
