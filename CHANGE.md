2.5.3

-   feat ✨ : display 属性 新增 flow-root table-row list-item 等值
-   feat ✨ : 新增了 beforeStr afterStr 配置 支持自定义生成文件头尾部分 其中 beforeStr 默认值为 /_ stylelint-disable _/
-   fix 🐛 : 配置文件的名称从 css.generator.config.js 改为 .css.generator.js
    2.5.2
-   feat ✨ : script genSnippets 命令 生成提示文件

    2.5.1

-   fix 🐛: 修复了 cdn 引入会重复生成 css 的问题
-   feat ✨ : 增加了 cdn 版本号的显示

    2.5.0

-   feat ✨ : 可直接引入 cdn 适用 适配了 ios macos chrome>= 44 不支持 ie

    2.3.91

-   fix 🐛: 修复了小程序不会捕获单引号内的 class 问题

    2.3.9

-   fix 🐛: 修复了`vToAny` 转换精度问题

    2.3.8

-   fix 🐛: 修复了`ellipsis` 多行时 vToAny 转换的问题

    2.3.7

-   feat ✨ : genSnippets 新增 visibility gap 属性
-   fix 🐛: 修复了`visibility` 生成的问题

    2.3.5

-   feat ✨ : 新增 visibility
-   fix 🐛: 修复了`z-index` 转换单位的问题

    2.3.4

-   版本号同步

    2.3.3

-   feat ✨ : 新增 gap column-gap row-gap

    2.3.2

-   doc 📖 : 文档修改

    2.3.1

-   feat ✨ : 新增 vite-plugin

    2.3.0

-   feat ✨ : 增加计算单位 v
-   删除了 pxToRem 更改为使用计算单位 v 并且可以自定义转换后的单位

    2.2.0

-   fix 🐛: 修复了`pxToRem`失效问题

    2.1.9

-   fix 🐛: 修复了 2.1.8 的打包 bug

    2.1.8

-   feat ✨ : 增加了`pxTorem`的能力

    2.1.7

-   fix 🐛: border 属性修复了方向顺序的错误 现在单独方向会覆盖多方向属性

    2.1.5

-   fix 🐛: ellipsis 属性移除了 display: inline-block 生成
