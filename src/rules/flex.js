/**
 * order 278
 */

import { PREFIX } from '../constant';
import { getConfig } from '../config';

export default {
	regExp(){
        const prefix = getConfig(PREFIX);
        return new RegExp(`^${prefix}-flex$`);
    },
	render() {
		return {
			name: 'flex',
			order: 278,
			css: ['display: flex'],
		};
	},
    snippets(config){
        return {
            //代码提示
            flex: {
                prefix: `${config.prefix}-flex`, //代码提示触发前缀
                body: `${config.prefix}-flex`, //代码提示内容
            },
        };
    },
};
