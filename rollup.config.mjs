import json from '@rollup/plugin-json';
import terser from '@rollup/plugin-terser';
import shebang from '@robmarr/rollup-plugin-shebang';
import rollupResolve from '@rollup/plugin-node-resolve';
import pluginReplace from '@rollup/plugin-replace';
import { babel } from '@rollup/plugin-babel';
const configList = [
	{
		input: 'src/vite-use.js',
		output: {
			file: 'dist/vite/index.js',
			format: 'cjs',
		},
	},
	{
		input: 'src/script-use.js',
		output: [
			{
				file: 'dist/script/auto-css.js',
				exports: 'default',
				format: 'iife',
				name: 'AutoCss',
			},
			{
				file: 'dist/script/index.js',
				exports: 'default',
				format: 'esm',
			},
		],
		plugins: [
			pluginReplace({
				'process.env.inBrowser': true,
				preventAssignment: true,
			}),
			babel({
				babelHelpers: 'runtime',
				skipPreflightCheck: true,
			}),
		],
	},
	{
		input: 'src/webpack-use.js',
		output: {
			file: 'dist/webpack/index.js',
			format: 'cjs',
		},
	},
	{
		input: 'src/cli-use.js',
		output: {
			file: 'dist/webpack/css-generator',
			format: 'cjs',
		},
		plugins: [shebang()],
	},
	{
		input: 'src/gen-snippets.js',
		output: [
			{
				file: 'dist/webpack/gen-snippets',
				format: 'cjs',
			},
			{
				file: 'dist/vite/gen-snippets',
				format: 'cjs',
			},
			{
				file: 'dist/script/gen-snippets',
				format: 'cjs',
			},
		],
		plugins: [shebang()],
	},
];

export default configList.map((config) => ({
	...config,
	plugins: [json(), terser(), rollupResolve(), ...(config.plugins ?? [])],
}));
