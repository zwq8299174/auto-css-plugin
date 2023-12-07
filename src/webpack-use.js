import { init, hotReloadwatcher, readConfigFile } from './index';
import { EXT_NAME, DIR_PATH } from './constant';
import { setConfig, getConfig } from './config';
const chokidar = require('chokidar');
const path = require('path');
const fs = require('fs');

const PLUGIN_NAME = 'AutoCssPlugin';
class AutoCssPlugin {
	constructor(options) {
		if (options === undefined) {
			options = readConfigFile();
		}
		setConfig(options);
		this.options = options;
	}
	writeCss(htmlData, callback) {
		let htmlStr = htmlData.html.toString(),
			cssStr = fs.readFileSync(path.resolve(process.cwd(), '.auto.css'), 'utf8'),
			styleStr = `<style type="text/css">${cssStr}</style>`;
		htmlData.html = htmlStr.replace(/<\/head>/, `${styleStr}</head>`);
		callback(null, htmlData);
	}
	hotReloadwatcher(htmlData, callback) {
		const regStr = getConfig(EXT_NAME).join('|');
		const watcher = chokidar.watch(path.resolve(getConfig(DIR_PATH)), {
			ignored: new RegExp(`^\\/([^/]+\\/)*[^/]*\\.((?!${regStr}).)+$`),
			persistent: true,
		});
		watcher.on('change', (path) => {
			this.writeCss(htmlData, callback);
			console.log(`auto-css-plugin: write css done!`);
		});
		this.writeCss(htmlData, callback);
	}
	// main(compiler) {
	// 	if (compiler.hooks) {
	// 		// webpack 4 support
	// 		compiler.hooks.compilation.tap(PLUGIN_NAME, (compilation) => {
	// 			if (compilation.hooks.htmlWebpackPluginBeforeHtmlProcessing) {
	// 				compilation.hooks.htmlWebpackPluginBeforeHtmlProcessing.tapAsync(PLUGIN_NAME, (htmlData, callback) => {
	// 					this.writeCss(htmlData, callback);
	// 				});
	// 			} else {
	// 				const HtmlWebpackPlugin = require('html-webpack-plugin');
	// 				HtmlWebpackPlugin.getHooks(compilation).beforeEmit.tapAsync(PLUGIN_NAME, (htmlData, callback) => {
	// 					this.writeCss(htmlData, callback);
	// 				});
	// 			}
	// 		});
	// 	} else {
	// 		// webpack 3 support
	// 		compiler.plugin('compilation', (compilation) => {
	// 			compilation.plugin('html-webpack-plugin-before-html-processing', (htmlData, callback) => {
	// 				this.writeCss(htmlData, callback);
	// 			});
	// 		});
	// 	}
	// }
	apply(compiler) {
		compiler.hooks.afterPlugins.tap(PLUGIN_NAME, (compilation) => {
			init(compiler);
			if (process.env.NODE_ENV === 'development') {
				hotReloadwatcher(compiler);
			}
		});
		if (!this.options || this.options.generate) return;
		// this.main(compiler);
		// compiler.hooks.watchRun.tapAsync(PLUGIN_NAME, (compiler, callback) => {
		// 	this.main(compiler);
		// 	callback();
		// });
		compiler.hooks.thisCompilation.tap(PLUGIN_NAME, (compilation) => {
			compilation.hooks.processAssets.tapAsync(
				{
					name: PLUGIN_NAME,
					stage: compiler.webpack.Compilation.PROCESS_ASSETS_STAGE_ADDITIONAL,
				},
				async (unusedAssets, callback) => {
					// 把 HTML 文件添加到文件依赖列表，好让 Webpack 去监听 HTML 模块文件，在 HTML 模版文件发生变化时重新启动一次编译
                    console.log(222222);
					compilation.fileDependencies.add(path.resolve(process.cwd(), this.options.generate));
					callback();
				},
			);
		});
	}
}
module.exports = AutoCssPlugin;
