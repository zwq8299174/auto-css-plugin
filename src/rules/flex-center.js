/**
 * order 278
 */

import { PREFIX } from '../constant';
import { getConfig } from '../config';

export default {
	regExp(){
        const prefix = getConfig(PREFIX);
        return new RegExp(`^${prefix}-flex-center$`);
    },
	render() {
		return {
			name: 'flex',
			order: 278,
			css: ['display: flex', 'justify-content: center', 'align-items: center'],
		};
	},
    snippets(config){
        return {
            //代码提示
            'flex-center': {
                prefix: `${config.prefix}-flex-center`, //代码提示触发前缀
                body: `${config.prefix}-flex-center`, //代码提示内容
            },
        };
    },
};
