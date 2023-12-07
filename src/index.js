import { filterClassNames } from './filter-class';
import { renderCss } from './pre-render';
import { getConfig } from './config';
import { EXT_NAME, GENERATE, DIR_PATH, CSS_ANNOTATION, BEFORE_STR, AFTER_STR } from './constant';
const { performance } = require('perf_hooks');
const fs = require('fs');
const path = require('path');
const chokidar = require('chokidar');
const {
    globSync
} = require('glob');
const shelljs = require('shelljs');
let hotReload = false;

let startTime = 0;
let endTime = 0;
const setTimeStart = () => {
	startTime = performance.now();
};
const setTimeEnd = () => {
	endTime = performance.now();
};

const getUseTime = () => (endTime - startTime).toFixed(2);

function readFile(path) {
	if (fs.existsSync(path) && fs.statSync(path).isFile()) {
		return fs.readFileSync(path, 'utf8');
	}
	return '';
}

function getAllFileClassStr() {
	const globSyncStr = getConfig(EXT_NAME).join('|');
    const globSyncPath = path.join(process.cwd(), `./${getConfig(DIR_PATH)}/**/*.@(${globSyncStr})`).replace(/\\/g,'/');
	const files = globSync(globSyncPath);
	return files.reduce((t, c) => t + readFile(path.resolve(c)), '');
}

function wirteToFile(compiler) {
	// console.log(compiler.options.output);
	let outPath = '';
	const isGen = getConfig(GENERATE);
	if (isGen) {
		outPath = path.resolve(getConfig(GENERATE));
		const cssDirPath = path.resolve(outPath, '..');
		if (!fs.existsSync(cssDirPath)) {
			shelljs.mkdir('-p', cssDirPath);
		}
	} else {
		outPath = path.resolve(process.cwd(), '.auto.css');
	}
	const cssStr = `${getConfig(BEFORE_STR) || ''}\n${CSS_ANNOTATION}${renderCss()}${getConfig(AFTER_STR) || ''}`;
	fs.writeFileSync(outPath, cssStr);
}

function getFilePath(str) {
	return path.resolve(process.cwd(), str);
}

function logUseTime() {
	console.log(`css generator ${hotReload ? 'reload' : 'init'} done use time ${getUseTime()}ms`);
}

export function init(compiler) {
	setTimeStart();
    // console.log('getAllFileClassStr');
    // console.log(getAllFileClassStr());
	filterClassNames(getAllFileClassStr());
	wirteToFile(compiler);
	setTimeEnd();
	if (compiler) {
		compiler.hooks.done.tap('auto-css-plugin-done', logUseTime);
	} else {
		logUseTime();
	}
}

export function readConfigFile() {
	let options = null;
	if (fs.existsSync(getFilePath('.auto.css.js'))) {
		options = require(getFilePath('.auto.css.js'));
	} else {
		throw new Error('未添加任何配置,请参照README.md中使用步骤添加配置文件');
	}
	return options;
}

export function hotReloadwatcher(compiler) {
	hotReload = true;
	const regStr = getConfig(EXT_NAME).join('|');
	const watcher = chokidar.watch(path.resolve(getConfig(DIR_PATH)), {
		// ignored: new RegExp(`^.*\\.(?:(?!(${regStr})).)+$`),
		ignored: new RegExp(`^\\/([^/]+\\/)*[^/]*\\.((?!${regStr}).)+$`),
		persistent: true,
	});
	watcher.on('change', (path) => {
		setTimeStart();
		startTime = performance.now();
		filterClassNames(readFile(path));
		wirteToFile();
		setTimeEnd();
		if (!compiler) {
			logUseTime();
		}
	});
}

export function hotReloadFn(txt) {
	hotReload = true;
	setTimeStart();
	filterClassNames(txt);
	wirteToFile();
	setTimeEnd();
	logUseTime();
}
