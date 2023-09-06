module.exports = {
	beforeStr: '', // css 文本嵌入的文字
	afterStr: '', // css结束嵌入的文字
	/**
	 * 颜色配置 默认包含如下值
	 * red         : '#f00'
	 * white       : '#fff'
	 * black       : '#000'
	 * blue        : '#00f'
	 * transparent : 'transparent'
	 * 可以覆盖写入 相关颜色可自定义 如 bg-red bg-diy
	 */
	colors: {},
	dirPath: 'src', // 必填项。源码根目录(必须存在此目录)
	generate: 'src/style/auto.css', // 必填项。生成文件位置(不存在会自动创建目录)
	type: 'vue', // 必填项。项目类型 vue | react | d-mini-program (钉钉小程序) | wx-mini-program(微信小程序) | html
	unit: 'px', // 可选项。默认单位px 如写 v 则必须配合 vToAny 使用
	/**
	 * 可覆写规则 或自定义规则 详见进阶使用 详情请看README
	 */
	modifyRules: {},
	/**
	 * 自定义媒体查询
	 * 可覆写或添加规则 以下为默认配置 如 md@bg-red or diy@bg-red
	 * sm : '(min-width: 640px)',
	 * md : '(min-width: 768px)',
	 * lg : '(min-width: 1024px)',
	 * xl : '(min-width: 1280px)'
	 */
	mediaQueries: {},
	/**
	 *  是否为所有css 添加 important
	 */
	important: true, //
	/**
	 * 可变单位 v 的转换方式
	 * 例如 w-10 => 10 / 16 =>  width: 0.625rem
	 */
	// vToAny: {
	//   unit: 'rem', // 默认转换后的单位
	//   rootValue: 16, // 表示根元素字体大小或基于输入参数返回根元素字体大小 1px -> 1/16rem
	//   unitPrecision: 5, // 允许小数单位精度
	//   minPixelValue: 1 // 不会被转换的最小值
	// }
};
