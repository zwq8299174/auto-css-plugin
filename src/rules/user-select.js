/**
 * order 430
 */
import { PREFIX } from '../constant';
import { getConfig } from '../config';

export default {
	regExp(){
        const prefix = getConfig(PREFIX);
        return new RegExp(`^${prefix}-(user-)?select-(?<value>none|auto|text|all|contain|element)$`);
    },
	render({ groups }) {
		const { value } = groups;
		return {
			name: 'userSelect',
			order: 430,
			css: [`user-select: ${value}`],
		};
	},
};
