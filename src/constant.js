import { version } from '../package.json';
import TRANSITION_PROPERTY_ENUM from './transition-prop';
export const toRegexStr = (_) => _.join('|');
export const PREFIX = 'prefix'; // 前缀
export const COLORS = 'colors'; // 选填
export const DIR_PATH = 'dirPath'; // 必填
export const GENERATE = 'generate'; // 必填 生成地址
export const UNIT = 'unit'; // 选填 单位
export const IMPORTANT = 'important'; // 选填 单位
export const GLOB_REG = 'globReg';
export const TO_ANY = 'toAnyConfig'; // px转其他单位配置
export const BEFORE_STR = 'beforeStr'; // 文件前缀头 默认 /* stylelint-disable */
export const AFTER_STR = 'afterStr'; // 文件后添加字符串
export const BORDER_COLOR = 'borderColor'; // 边框颜色
export const PAGE_WIDTH = 'pageWidth'; // 页面宽度
// 以下是项目配置 不从配置文件读
export const EXT_NAME = 'extNames';
export const MODIFY_RULES = 'modifyRules';
export const MEDIA_QUERIES = 'mediaQueries';
// 以下是枚举

export const DISPLAY_ENUM = ['unset', 'revert', 'initial', 'inherit', 'list-item', 'table-row', 'table', 'contents', 'none', 'flow-root', 'inline-grid', 'grid', 'inline-flex', 'flex', 'inline-block', 'inline', 'block'];

export const JUSTIFY_CONTENT_ENUM = ['left', 'right', 'center', 'start', 'end', 'flex-start', 'flex-end', 'left', 'right', 'space-between', 'between', 'space-around', 'around', 'space-evenly', 'evenly', 'stretch', 'inherit', 'initial', 'unset', 'normal'];
export const ALIGN_ITEMS_ENUM = ['baseline', 'center', 'end', 'flex-end', 'flex-start', 'inherit', 'initial', 'normal', 'self-end', 'self-start', 'start', 'stretch', 'unset'];

export const ALIGN_CONTENT_ENUM = ['flex-end', 'flex-start', 'center', 'inherit', 'initial', 'stretch', 'space-between', 'space-around', 'space-evenly', 'end', 'start', 'between', 'around', 'evenly'];

export const CURSOR_ENUM = ['auto', 'default', 'none', 'context-menu', 'help', 'pointer', 'progress', 'wait', 'cell', 'crosshair', 'text', 'vertical-text', 'alias', 'copy', 'move', 'no-drop', 'not-allowed', 'e-resize', 'n-resize', 'ne-resize', 'nw-resize', 's-resize', 'se-resize', 'sw-resize', 'w-resize', 'ew-resize', 'ns-resize', 'nesw-resize', 'nwse-resize', 'col-resize', 'row-resize', 'all-scroll', 'zoom-in', 'zoom-out', 'grab', 'grabbing'];

const PSEUDO_ENUM = ['active', 'any-link', 'blank', 'checked', 'current', 'default', 'defined', 'disabled', 'drop', 'empty', 'enabled', 'first', 'first-child', 'first-of-type', 'fullscreen', 'future', 'focus', 'focus-visible', 'focus-within', 'host', 'hover', 'indeterminate', 'in-range', 'invalid', 'last-child', 'last-of-type', 'left', 'link', 'local-link', 'only-child', 'only-of-type', 'optional', 'out-of-range', 'past', 'placeholder-shown', 'read-only', 'read-write', 'required', 'right', 'root', 'scope', 'target', 'target-within', 'user-invalid', 'valid', 'visited'];

export const GAP_ENUM = ['unset', 'initial', 'inherit', 'normal'];

export const FLOAT_ENUM = ['left', 'right', 'none', 'initial', 'inherit'];

export const VERTICAL_ALIGN_ENUM = ['baseline', 'sub', 'super', 'text-top', 'text-bottom', 'middle', 'top', 'bottom', 'inherit', 'initial', 'unset'];

export const TIME_FUNCTION_ENUM = ['ease', 'ease-in', 'ease-out', 'ease-in-out', 'linear', 'step-start', 'step-end', 'initial', 'inherit', 'unset'];

export const UNIT_ENUM = ['px', 'pt', 'em', 'rem', 'vw', 'vh', 'p'];

export const DISPLAY_STR = toRegexStr(DISPLAY_ENUM);
export const PSEUDO_STR = toRegexStr(PSEUDO_ENUM);
export const JUSTIFY_CONTENT_ENUM_STR = toRegexStr(JUSTIFY_CONTENT_ENUM);
export const ALIGN_ITEMS_ENUM_STR = toRegexStr(ALIGN_ITEMS_ENUM);
export const ALIGN_CONTENT_ENUM_STR = toRegexStr(ALIGN_CONTENT_ENUM);
export const CURSOR_ENUM_STR = toRegexStr(CURSOR_ENUM);
export const UNIT_ENUM_STR = toRegexStr(UNIT_ENUM);
export const VERTICAL_ALIGN_STR = toRegexStr(VERTICAL_ALIGN_ENUM);
export const GAP_ENUM_STR = toRegexStr(GAP_ENUM);
export const FLOAT_ENUM_STR = toRegexStr(FLOAT_ENUM);
export const TRANSITION_PROPERTY_ENUM_STR = toRegexStr(TRANSITION_PROPERTY_ENUM);
export const TIMING_FUNCTION_ENUM_STR = toRegexStr(TIME_FUNCTION_ENUM);
// 文件开头
export let CSS_ANNOTATION = '/*';
CSS_ANNOTATION += '@charset "UTF-8";\n';
CSS_ANNOTATION += `  version: v${version}\n`;
CSS_ANNOTATION += `  author: 7*\n`;
CSS_ANNOTATION += '  此文件内容自动生成并更新\n';
CSS_ANNOTATION += '  请勿编辑此文件!\n';
CSS_ANNOTATION += '  请勿编辑此文件!\n';
CSS_ANNOTATION += '  请勿编辑此文件!\n';
CSS_ANNOTATION += '*/\n\n';

export const BASE_MEDIA_QUERY = {
	sm: '(min-width: 640px)',
	md: '(min-width: 768px)',
	lg: '(min-width: 1024px)',
	xl: '(min-width: 1280px)',
};

export const BASE_MEDIA_QUERY_KEY = Object.keys(BASE_MEDIA_QUERY);
export const NONNEGATIVE_NUMBER_REGEX_STR = '(0|([1-9]\\d*))(\\.\\d*[1-9])?';
export const DIRECTION_MAP = new Map();
DIRECTION_MAP.set(undefined, ['']); // 全部
DIRECTION_MAP.set('x', ['left', 'right']);
DIRECTION_MAP.set('y', ['top', 'bottom']);
DIRECTION_MAP.set('t', ['top']);
DIRECTION_MAP.set('r', ['right']);
DIRECTION_MAP.set('b', ['bottom']);
DIRECTION_MAP.set('l', ['left']);
DIRECTION_MAP.set('top', ['top']);
DIRECTION_MAP.set('right', ['right']);
DIRECTION_MAP.set('bottom', ['bottom']);
DIRECTION_MAP.set('left', ['left']);

export const RADIUS_DIRECTION_MAP = new Map();
RADIUS_DIRECTION_MAP.set(undefined, ['']); // 全部
RADIUS_DIRECTION_MAP.set('t', ['top-left', 'top-right']);
RADIUS_DIRECTION_MAP.set('r', ['top-right', 'bottom-right']);
RADIUS_DIRECTION_MAP.set('b', ['bottom-left', 'bottom-right']);
RADIUS_DIRECTION_MAP.set('l', ['top-left', 'bottom-left']);
RADIUS_DIRECTION_MAP.set('top', ['top-left', 'top-right']);
RADIUS_DIRECTION_MAP.set('right', ['top-right', 'bottom-right']);
RADIUS_DIRECTION_MAP.set('bottom', ['bottom-left', 'bottom-right']);
RADIUS_DIRECTION_MAP.set('left', ['top-left', 'bottom-left']);
RADIUS_DIRECTION_MAP.set('top-left', ['top-left']);
RADIUS_DIRECTION_MAP.set('top-right', ['top-right']);
RADIUS_DIRECTION_MAP.set('bottom-left', ['bottom-left']);
RADIUS_DIRECTION_MAP.set('bottom-right', ['bottom-right']);

export const genSnippets = (ruleName, prefix, className, props, units = []) => {
	let snippets = {};
	for (const name of className) {
		for (const prop of props) {
			const propName = prop ? `${prop}-` : '';
			if (units && units.length > 0) {
				for (const unit of units) {
					snippets[`${ruleName == name ? ruleName : name + '(' + ruleName + ')'}:${propName}${unit ? unit : ''}`] = {
						prefix: `${prefix}-${name}-${propName}${unit ? unit : ''}`,
						body: `${prefix}-${name}-${propName}$1${unit ? unit : ''}`,
					};
				}
			} else {
				snippets[`${ruleName == name ? ruleName : name + '(' + ruleName + ')'}:${prop ? prop : ''}`] = {
					prefix: `${prefix}-${name}-${prop ? prop : ''}`,
					body: `${prefix}-${name}-${prop ? prop : ''}`,
				};
			}
		}
	}
	return snippets;
};
