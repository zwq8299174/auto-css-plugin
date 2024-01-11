# auto-css-plugin 根据className生成样式,便捷超乎想象,丝般顺滑。

## TODO
1、项目中多人编辑冲突问题
2、webpack5兼容问题
3、windows兼容问题

## DEMO
[现在体验](https://zwq8299174.github.io/auto-css-plugin/)

## 如何使用

插件支持webpack、vue-cli、vite、CDN模式引用，具体用法如下：

## 安装依赖

```shell
npm i auto-css-plugin -D
    or
yarn add auto-css-plugin -D
```

### 配置
#### webpack、vue-cli

```javascript
const AutoCssPlugin = require('auto-css-plugin');
{
    // ... other config settings
    plugins: [new AutoCssPlugin()];
}
```

#### vite

```javascript
const AutoCssPlugin = require('auto-css-plugin/vite');
export default defineConfig({
    // ... other config settings
    plugins: [AutoCssPlugin()],
});
```

### CDN 引入

```html
<html>
    <head>
        <script src="https://cdn.jsdelivr.net/npm/auto-css-plugin@1.0.0/dist/script/auto-css.js"></script>
    </head>
    <body></body>
    <script>
        // {} is config
        new window.AutoCss({}).start();
    </script>
</html>
```

---

## 配置项

webpack 或 vue-cli 用户请 下载本项目中配置文件 **[.auto.css.js](./.auto.css.js)** 到项目根目录

cdn 用户请在函数中传入配置

可参考如下配置:
``` javascript
module.exports = {
  prefix: "x", // class前缀,防止和项目中其他样式及UI框架样式冲突，默认是'x'
  beforeStr: "", // css 文本嵌入的文字
  afterStr: "", // css结束嵌入的文字
  /**
   * 颜色配置 默认包含如下值
   * red         : '#f00'
   * white       : '#fff'
   * black       : '#000'
   * blue        : '#00f'
   * transparent : 'transparent'
   * 可以覆盖写入 相关颜色可自定义 如 bg-red bg-diy
   */
  colors: {
    primary: "#2788e9",
    secondary: "#4d99ff",
    deep: "#016eff",
    success: "#40bb3f",
    warning: "#faad14",
    error: "#fe0000",
    info: "#909399",
    gray: "#f5f5f5",
    transparent: "transparent"
  },
  borderColor: "#ddd",
  dirPath: "/src", // 必填项。源码根目录(必须存在此目录),默认为/src,开发热更新使用。
  generate: '/src/styles/auto.css', // 必填项,样式文件生成地址,需自行引入。
  type: "vue", // 必填项。项目类型 vue | react | d-mini-program (钉钉小程序) | wx-mini-program(微信小程序) | html
  pageWidth: "750", // 可选项。默认页面宽度 750，单位像素
  /**
   * 可覆写规则 或自定义规则 详见进阶使用 详情请看规则进阶
   */
  modifyRules: {
    primaryBox: () => {
      return {
        regExp: new RegExp(`^x-primary-box$`),
        render() {
          return {
            name: "primaryBox",
            order: 900,
            css: [
              "height:100px",
              "width:100px",
              "border-radius:20px",
              "background-color:red"
            ]
          };
        },
        snippets: {
          //代码提示
          通用盒子: {
            prefix: `x-primary-box`, //代码提示触发前缀
            body: `x-primary-box` //代码提示内容
          }
        }
      };
    }
  },
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
  important: true, // 默认为 false
  unit: "px", // 可选项。默认单位px,p是百分比
  //单位转换配置
  //可以是对象或者函数
  // toAnyConfig: {
  //   unit: 'rem', // 默认转换后的单位
  //   rootValue: 16, // 表示根元素字体大小或基于输入参数返回根元素字体大小 1px -> 1/16rem
  //   unitPrecision: 5, // 允许小数单位精度
  //   minPixelValue: 1 // 不会被转换的最小值
  // },
  //函数必须返回num、unit字段
  toAnyConfig: ({ num, unit }) => {
    if (num > 1 && (unit == "px" || unit == undefined)) {
      return {
        num: (num / 100).toFixed(4),
        unit: "rem"
      };
      // return {
      // 	num: (num / 375).toFixed(4),
      // 	unit: 'vw',
      // };
    }
    return {
      num,
      unit
    };
  }
};
```

## 生成代码提示文件

将会在根目录生成 auto-css-snippets.code-snippets 作为代码提示文件

```
npx gen-snippets
 or
yarn gen-snippets
```


## [规则说明与进阶使用](./RULE.md)
