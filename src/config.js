import { PREFIX, EXT_NAME, GLOB_REG, COLORS, UNIT, IMPORTANT, MODIFY_RULES, MEDIA_QUERIES, BEFORE_STR, PAGE_WIDTH, DIR_PATH } from './constant';

let programConfig = {
	[MODIFY_RULES]: {},
};
const runType =
	process.env.inBrowser === true
		? {}
		: {
				vue: {
					[EXT_NAME]: ['vue'],
					reg: /(?:(?<=class=(["']))[\s\S]*?(?=\1))|((?<=class={)[\s\S]*?(?=}))/gi,
				},
                nvue: {
					[EXT_NAME]: ['nvue'],
					reg: /(?:(?<=class=(["']))[\s\S]*?(?=\1))|((?<=class={)[\s\S]*?(?=}))/gi,
				},
				react: {
					[EXT_NAME]: ['tsx', 'jsx'],
					reg: /(?:(?<=className=(["']))[\s\S]*?(?=\1))|((?<=className={)[\s\S]*?(?=}))/gi,
				},
				'ali-mini-program': {
					// ali小程序
					[EXT_NAME]: ['axml'],
					reg: /(?:(?<=class=(["']))|(?<=classname="))[\s\S]+?(?=\1)/gi,
				},
				'wx-mini-program': {
					// 微信小程序
					[EXT_NAME]: ['wxml'],
					reg: /(?:(?<=class=(["']))|(?<=classname="))[\s\S]+?(?=\1)/gi,
				},
				html: {
					// 单纯 html
					[EXT_NAME]: ['html'],
					reg: /(?:(?<=class=(["']))[\s\S]*?(?=\1))/gi,
				},
		  };
export function getConfig(str) {
	switch (str) {
		// 此处配置默认值
		case PREFIX:
			return programConfig[PREFIX] || 'x';
		case EXT_NAME:
			return programConfig[EXT_NAME] || runType[programConfig.type][EXT_NAME];
		case GLOB_REG:
			return runType[programConfig.type].reg;
		case COLORS: // 默认空对象
			return programConfig[COLORS] || {};
		case UNIT: // 默认px
			return programConfig[UNIT] || 'px';
		case MEDIA_QUERIES: // 默认px
			return programConfig[MEDIA_QUERIES] || {};
		case IMPORTANT: // 默认添加！important 设置默认值
			return programConfig[IMPORTANT] === undefined ? false : programConfig[IMPORTANT];
		case BEFORE_STR:
			return programConfig[BEFORE_STR] || '/* stylelint-disable */';
		case PAGE_WIDTH:
			return programConfig[PAGE_WIDTH] || 750;
		case DIR_PATH:
			return programConfig[DIR_PATH] || 'src';
        case 'ALL': //所有配置项
            return programConfig;
		default: // dirPath generate  等项目配置
			return programConfig[str];
	}
}

export function setConfig(config) {
	programConfig = config;
}

export function getUnit(number, str) {
	if (Number(number) === 0) {
		return '';
	}
	if (str === 'p') {
		return '%';
	}
	if (!str) {
		return programConfig[UNIT] || 'px';
	}
	return str;
}
