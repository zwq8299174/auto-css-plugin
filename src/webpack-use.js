import { init, hotReloadwatcher, readConfigFile } from './index';
import { setConfig } from './config';
const path = require('path');
const fs = require('fs');

module.exports = class Main {
	constructor(options) {
		if (options === undefined) {
			options = readConfigFile();
		}
		setConfig(options);
	}
	apply(compiler) {
		// console.log(compiler);
		compiler.hooks.afterPlugins.tap('auto-css-plugin', (compilation) => {
			init(compiler);
			if (process.env.NODE_ENV === 'development') {
				hotReloadwatcher(compiler);
			}
		});
		compiler.hooks.compilation.tap('auto-css-plugin', (compilation) => {
            compilation.hooks.htmlWebpackPluginAfterHtmlProcessing.tapAsync('auto-css-plugin', (htmlData, callback) => {
                let htmlStr = htmlData.html.toString();
                const cssStr = fs.readFileSync(path.resolve(process.cwd(),'.auto.css'), 'utf8');
                const styleStr = `<style type="text/css">${cssStr}</style>`;
                htmlData.html = htmlStr.replace(/<\/head>/, `${styleStr}</head>`);
                // console.log(htmlData.html);
                callback(null, htmlData);
            });
			// compilation.hooks.htmlWebpackPluginBeforeHtmlGeneration.tapAsync('auto-css-plugin', (htmlData, callback) => {
            //     // console.log(htmlData);
			// 	const publicPath = htmlData.assets.publicPath;
			// 	htmlData.assets.css.unshift(path.resolve(process.cwd(), `${publicPath}static/css/auto.css`));
			// 	callback(null, htmlData);
			// });
		});
	}
};
