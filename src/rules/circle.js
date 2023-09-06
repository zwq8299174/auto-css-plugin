/**
 * order 529
 */
import { PREFIX } from '../constant';
import { getConfig } from '../config';

export default {
	regExp(){
        const prefix = getConfig(PREFIX);
        return new RegExp(`^${prefix}-(circle|round)$`);
    },
	render() {
		return {
			name: 'circle',
			order: 529,
			css: ['border-radius: 50%'],
		};
	},
    snippets(config){
        return {
            //代码提示
            circle: {
                prefix: `${config.prefix}-circle`, //代码提示触发前缀
                body: `${config.prefix}-circle`, //代码提示内容
            },
            round: {
                prefix: `${config.prefix}-round`, //代码提示触发前缀
                body: `${config.prefix}-round`, //代码提示内容
            },
        };
    },
};
