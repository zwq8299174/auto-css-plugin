# 生成规则

本文主要介绍基于 class 命名生成 css 的规则，所有规则都是基于默认前缀'x'的，如果修改了配置中前缀属性的，请自行匹配前缀。

### 简写约定

```text
+ m is margin
+ p is padding
+ h is height
+ w is width
```

### 方向约定 t|r|b|l|x|y|top|right|bottom|left

```text
+ y代表上下tb x代表左右lr组合方向
+ t|r|b|l对应top、right、bottom、left
+ 权重优先级 trbl单项 > xy双向组合 > 四项组合
```

### 伪类约定

```text
+ 伪类后跟任意属性
hover|link|visited|active|focus|focus-within 等伪类 后接属性 如 hover:c-red active:w-233
```

### 媒体查询约定

```text
内置三种媒体查询 如果需要覆盖或自定义添加 请看进阶使用
  sm : '(min-width: 640px)',
  md : '(min-width: 768px)',
  lg : '(min-width: 1024px)',
  xl : '(min-width: 1280px)'
  如 sm@bg-fff lg@w-2333 xl@m-t-10
  即可在不同屏幕大小中正确使用媒体查询支持全部属性 如需要与伪类配合使用 语法如下 <媒体查询>@<伪类>:<属性>
```

### 数值约定

```text
+ m-16  16代表正数
+ m-m-16 -m-16代表负数(部分属性支持)
+ 数值全部支持小数 如 m-t-0.222vh w-33.333333p
```

### 单位约定

```text
+ 单位支持px, pt, em, rem, vw, vh, p
+ p为百分比%的缩写。默认不传为px
```

### 属性约定

```text
+ 大部分属性符合key-value形式，部分属性会兼容简写，如dispaly-flex / d-flex
+ 部分属性为常用组合属性，如正方形 square-80(width:80px;height:80px) 、圆形circle、square-80、flex-center-center等
```

### 详情如下

所有属性必须按照`前缀-`开头，例如`x-`

> #### 常用属性

- **宽或高**
  #### (w|h)-(数值)(单位)?
  ```css
  .x-w-10p {
    width: 10%;
  }
  .x-w-375 {
    width: 375px;
  }
  .x-h-100vh {
    height: 100vh;
  }
  ```
- **最大(小)宽(高)**
  #### (min|max)-(h|w)-(数值)(单位)?
  ```css
  .x-max-w-100 {
    max-width: 100px;
  }
  .x-min-w-300rem {
    min-width: 300rem;
  }
  .x-max-h-100vh {
    max-height: 100vh;
  }
  ```
- **常用简写**

  #### 正方形 square-(数值)(单位)?

  ```css
  .x-square-80 {
    width: 80px;
    height: 80px;
  }
  ```

  #### 圆形 circle

  ```css
  .x-circle {
    border-radius: 50%;
  }
  ```

  #### flex 居中 flex-center

  ```css
  .x-flex-center {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  ```

  #### flex

  ```css
  .x-flex {
    display: flex;
  }
  ```

  #### full

  ```css
  .x-full-page {
    width: 750px;
  }
  .x-full-row {
    width: 100%;
  }
  .x-full-col {
    height: 100%;
  }
  ```

  #### 加粗 bold

  ```css
  .x-bold {
    font-weight: bold;
  }
  ```

  #### 无样式文字 text-normal

  ```css
  .x-text-normal {
    font-weight: normal;
    font-style: normal;
    text-decoration: none;
  }
  ```

- **内外间距**

  #### (m|p)-(方向-)?(m-)?(数值)(单位)?

  ```css
  .x-m-16 {
    margin: 16px;
  }
  .x-m-b-32rem {
    margin-bottom: 32rem;
  }
  .x-m-x-m-22rem {
    margin-left: -22rem;
    margin-right: -22rem;
  }
  .x-p-x-24 {
    padding-left: 24px;
    padding-right: 24px;
  }
  ```

- 图层高度
    #### (index|z)-(m-)?(数值)
    ```css
    .x-index-9 {
        z-index: 9;
    }

    .x-index-m-9 {
        z-index: -9;
    }

    .x-z-9 {
        z-index: 9;
    }
    ```

> #### flex 相关

- flex 系数
  #### flex-(数值|参数)

  ```css
  .x-flex-1 {
    flex: 1;
  }
  .x-flex-none {
    flex: none;
  }
  .x-flex-auto {
    flex: auto;
  }
  ```

- flex 组合属性
  #### flex-(主轴参数)-(交叉轴参数)

  ```css
  .x-flex-space-between-center {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .x-flex-center-center {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  ```

- flex 换行
  #### flex-(参数)

  ```css
  .x-flex-nowrap {
    flex-wrap: nowrap;
  }

  .x-flex-wrap-reverse {
    flex-wrap: wrap-reverse;
  }

  .x-flex-wrap {
    flex-wrap: wrap;
  }
  ```

- flex 主轴
  #### (justify-content|jc|row)-(主轴参数)

  ```css
  .x-justify-content-space-between {
    justify-content: space-between;
  }
  .x-row-center {
    justify-content: center;
  }
  .x-jc-center {
    justify-content: center;
  }
  ```

- flex 交叉轴
  #### (align-items|ai|col)-(交叉轴参数)

  ```css
  .x-align-items-center {
    align-items: center;
  }
  .x-ai-center {
    align-items: center;
  }
  .x-col-start {
    align-items: flex-start;
  }
  ```

- flex 项目交叉轴对其方式
  #### (align-self|self|as)-(参数)

  ```css
  .x-align-self-center {
    align-self: center;
  }
  .x-as-center {
    align-self: center;
  }
  .x-self-end {
    align-self: flex-end;
  }
  ```

- flex(align-content)对齐方式
  #### (align-content|content|ac)-(参数)

  ```css
  .x-align-content-center {
    align-content: center;
  }
  .x-ac-center {
    align-content: around;
  }
  .x-content-end {
    align-content: flex-end;
  }
  ```

- flex 轴方向
  #### (flex)-(轴方向参数)

  ```css
  .x-flex-column {
    flex-direction: column;
  }
  .x-flex-row {
    flex-direction: row;
  }
  ```

- flex 缩放
  #### flex-(shrink|grow)-(数值|参数)
  ```css
  .x-flex-grow-1 {
    flex-grow: 1;
  }
  .x-flex-shrink-0 {
    flex-shrink: 0;
  }
  .x-flex-shrink-initial {
    flex-shrink: initial;
  }
  ```
- flex 占用轴空间
  #### flex-basis-((数值(单位)?)|其他参数)

  ```css
  .x-flex-basis-20p {
    flex-basis: 20%;
  }
  .x-flex-basis-20 {
    flex-basis: 20px;
  }
  .x-flex-basis-auto {
    flex-basis: auto;
  }
  ```

- order 排序
    #### order-(数值)

    ```css
    .x-order-1 {
        order: 1;
    }
    ```

> #### 文字相关

- 字体大小
  #### (font-size|fs|f|font)-(数值)(单位)?

  ```css
  .x-fs-22 {
    font-size: 22px;
  }
  .x-font-size-22rem {
    font-size: 22rem;
  }
  .x-f-22 {
    font-size: 22px;
  }
  .x-font-22rem {
    font-size: 22rem;
  }
  ```

- 字体粗细
  #### (font-weight|fw)-(参数)
  ```css
  .x-fw-bold {
    font-weight: bold;
  }
  .x-font-weight-300 {
    font-weight: 300;
  }
  .x-fw-900 {
    font-weight: 900;
  }
  ```
- 文字水平对齐
  #### (text-align|text)-(参数)
  ```css
  .x-text-align-center {
    text-align: center;
  }
  .x-text-center {
    text-align: center;
  }
  ```

- 末行文字水平对齐
  #### (text-align-last|text-last)-(参数)

  ```css
  .x-text-align-last-center {
    text-align-last: center;
  }
  .x-text-last-center {
    text-align-last: center;
  }
  ```

- 行高
  #### (lh|line-height)-(((数值)(单位)?)|参数)
  ```css
  .x-lh-14 {
    line-height: 14px;
  }
  .x-lh-normal {
    line-height: normal;
  }
  .x-line-height-14rem {
    line-height: 14rem;
  }
  ```
- 字间距
  #### (letter-spacing|letter|ls)-(数值)(单位)?
  ```css
  .x-letter-spacing-4 {
    letter-spacing: 4px;
  }
  .x-letter-spacing-4rem {
    letter-spacing: 4rem;
  }
  .x-letter-4 {
    letter-spacing: 4px;
  }
  .x-ls-4rem {
    letter-spacing: 4rem;
  }
  ```
- 文字行数，超出隐藏
  #### (text-line|line)(-num)?

  ```css
  .x-text-line {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .x-text-line-2 {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
  .x-line-3 {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }
  ```

- 文字换行相关
  #### word-break-(参数)

  ```css
  .x-word-break-break-all {
    word-break: break-all;
  }
  .x-word-break-break-word {
    word-break: break-word;
  }
  ```

  #### white-space-(参数)

  ```css
  .x-white-space-normal {
    white-space: normal;
  }
  .x-white-space-nowrap {
    white-space: nowrap;
  }
  ```

- 文本修饰
    #### (text-decoration|text)-(参数)
    ```css
    .x-text-decoration-underline {
        text-decoration: underline;
    }
    .x-text-overline {
        text-decoration: overline;
    }
    ```

> #### 位置及显示相关

- 定位
  #### (position|pos)-(定位参数)或直接定位参数

  ```css
  .x-position-relative {
    position: relative;
  }
  .x-pos-absolute {
    position: absolute;
  }
  .x-fixed {
    position: fixed;
  }
  ```

- 方向定位
  #### (方向[trblxy]top|right|bottom|left)-(m-)?-(数值)(单位)?

  ```css
  .x-l-283 {
    left: 283px;
  }
  .x-top-0px {
    top: 0;
  }
  .x-right-m-672 {
    right: -672px;
  }
  .x-y-30 {
    top: 30px;
    bottom: 30px;
  }
  ```

- display
  #### (display|d)-(参数)

  ```css
  .x-display-none {
    display: none;
  }
  .x-d-flex {
    display: flex;
  }
  ```

- float 浮动布局
  #### float-(参数)
  ```css
  .x-float-left {
    float: left;
  }
  .x-float-right {
    float: right;
  }
  ```
- 清除浮动
  #### (clear|clearfix)-(参数)

  ```css
  .x-clear-both::after {
    content: "";
    display: block;
    clear: both;
  }
  .x-clearfix-left::after {
    content: "";
    display: block;
    clear: left;
  }
  ```

- 盒子模型
  #### (box-sizing|box)-(参数)

  ```css
  .x-box-sizing-border-box {
    box-sizing: border-box;
  }
  .x-box-content-box {
    box-sizing: content-box;
  }
  ```

- overflow
  #### overflow-(xy)?-(参数)
  ```css
  .x-overflow-x-hidden {
    overflow-x: hidden;
  }
  .x-overflow-auto {
    overflow: auto;
  }
  ```

- 显示隐藏
  #### visibility-(值)
  ```css
  .x-visibility-hidden {
    visibility: hidden;
  }
  .x-visibility-visible {
    visibility: visible;
  }
  ```

- 鼠标样式
  #### cursor-(参数)

  ```css
  .x-cursor-pointer {
    cursor: pointer;
  }
  ```

- 垂直对齐
    #### vertical-align-(参数)
    ```css
    .x-vertical-align-top {
        vertical-align: top;
    }
    ```

> #### 颜色相关

##### 自带 white transparent blue black 可进行配置

- 字体颜色
  ##### (color|c|text)-?(16 进制色[8 位,6 位,3 位]|自定义颜色)(-透明度 8 位没有透明度)?
  ```css
  .x-c-red {
    color: rgba(255, 0, 0, 1);
  }
  .x-color-43ad7f-25 {
    color: rgba(67, 173, 127, 0.25);
  }
  ```
- 背景色
  ##### (bg|background)-(伪类-)?(16 进制色[6 位或 3 位]|自定义颜色)(-透明度)?
  ```css
  .x-bg-black-35 {
    background: rgba(0, 0, 0, 0.35);
  }
  .x-background-active-43ad7f-35:active {
    background: rgba(67, 173, 127, 0.35);
  }
  ```
- 边框色
  ##### (border-color|border-c)-(伪类-)?(16 进制色[6 位或 3 位]|自定义颜色)(-透明度)?

  ```css
  .x-border-c-black-35 {
    border-color: rgba(0, 0, 0, 0.35);
  }
  .x-border-color-active-43ad7f-35:active {
    border-color: rgba(67, 173, 127, 0.35);
  }
  ```

- 透明度
  #### opacity-(0-100)

  ```css
  .x-opacity-20 {
    opacity: 0.2;
  }
  ```

> #### 边框相关

- 边框宽度(实线、颜色为配置中 borderColor 的颜色)
  #### (border|border-width|border-w)-(方向-)?(数值)(单位)?

  ```css
  .x-border-2 {
    border-width: 2px;
    border-style: solid;
    border-color: $borderColor;
  }
  .x-border-w-x-2em {
    border-width: 2em;
    border-style: solid;
    border-color: $borderColor;
  }
  ```

- 边框圆角
  #### (border-radius|br|radius)-(数值)(单位)?
  ```css
  .x-border-radius-4 {
    border-radius: 4px;
  }
  .x-br-20p {
    border-radius: 20%;
  }
  .x-radius-20 {
    border-radius: 20px;
  }
  ```
- 边框类型
    #### (border-style|bs)-(参数)
    ```css
    .x-border-style-dashed {
        border-style: dashed;
    }
    .x-bs-dotted {
        border-style: dotted;
    }
    ``` 
>#### GAP 布局相关

- 间距
  #### gap-((数值(单位)?)|其他参数)

  ```css
  .x-gap-20 {
    column-gap: 20px;
    row-gap: 20px;
  }
  .x-gap-20p {
    column-gap: 20%;
    row-gap: 20%;
  }
  .x-gap-unset {
    column-gap: unset;
    row-gap: unset;
  }
  ```

- 列间距
  #### column-gap-((数值(单位)?)|其他参数)

  ```css
  .x-column-gap-20 {
    column-gap: 20px;
  }
  .x-column-gap-20p {
    column-gap: 20%;
  }
  .x-column-gap-unset {
    column-gap: unset;
  }
  ```

- 行间距
    #### row-gap-((数值(单位)?)|其他参数)
    ```css
    .x-row-gap-20 {
        row-gap: 20px;
    }
    .x-row-gap-20p {
        row-gap: 20%;
    }
    .x-row-gap-unset {
        row-gap: unset;
    }
    ```

> #### 其他属性

- 图片填充
  #### object-fit-(参数)

  ```css
  .x-object-fit-fill {
    object-fit: fill;
  }
  ```

- 鼠标选择
  #### (user-)?select-(参数)

  ```css
  .x-user-select-none {
    user-select: none;
  }
  .x-select-none {
    user-select: none;
  }
  .x-select-auto {
    user-select: auto;
  }
  ```

> #### 变化相关

- transition
  #### transition-?(property)-?(timing-function)-(duration)

  ```css
  .x-transition-0.3 {
    transition: all ease 300ms;
  }
  .x-transition-opacity-0.3 {
    transition: opacity ease 300ms;
  }
  .x-transition-opacity-linear-0.3 {
    transition: opacity linear 300ms;
  }
  ```

- transition-delay
  #### delay-(duration)

  ```css
  .x-delay-0.3 {
    transition-delay: 300ms;
  }
  ```

### 进阶使用

- 内置的属性如下,可以用 modifyRules 覆盖或者添加其他新属性

  - alignContent
  - alignItems
  - alignSelf
  - bold
  - borderRadius
  - borderStyle
  - border
  - boxSizing
  - circle
  - clearfix
  - color
  - columnGap
  - cursor
  - display
  - flexBasis
  - flexCenter
  - flexDirection
  - flexJustAli
  - flexNum
  - flexShrinkAndGrow
  - flexWrap
  - flex
  - float
  - fontSize
  - fontWeight
  - full
  - gap
  - height
  - index
  - justifyContent
  - letterSpacing
  - lineHeight
  - line
  - marginAndPadding
  - maxHeight
  - maxWidth
  - minHeight
  - minWidth
  - objectFit
  - opacity
  - order
  - orientation
  - overflow
  - position
  - rowGap
  - square
  - textAlignLast
  - textAlign
  - textDecoration
  - textNormal
  - transitionDelay
  - transition
  - userSelect
  - verticalAlign
  - visibility
  - whiteSpace
  - width
  - wordBreak
  - zIndex

  ### 说明如下

  ```javascript
  modifyRules: {
      /**
       * 如需覆盖自带属性 则属性名 相同
      * 此处值 为 object 或者 函数,函数必须返回相同格式的对象
      * 函数入参如下:
      * config 配置参数
      * textToRgbText 将16进制颜色 或定义的颜色转为rgba语法
      * getColorsKey 获取所有定义的颜色的key数组
      * getColors 获取所有定义的颜色的对象
      * UNIT_ENUM_STR 捕获单位的正则字符串
      * NONNEGATIVE_NUMBER_REGEX_STR 捕获数字的正则字符串
      * DIRECTION_MAP 方向定义的 map
      */
      primaryBox: ({
          config,
          textToRgbText,
          getColorsKey,
          getColors,
          UNIT_ENUM_STR,
          NONNEGATIVE_NUMBER_REGEX_STR,
          DIRECTION_MAP
      }) => {
          return {
          /**
           * 此处必须存在 regExp 为正则表达式 或 函数 函数必须返回正则表达式
          * 此处必须存在 render 函数
          * 入参 为 字符串mathch 正则表达式的结果 (只有匹配上的才会调用render)
          * render 函数必须返回 name:String order:Number css:Array<String>
          * 将会使用 render 返回的结果 生成css
          * 如果导出 num 则会按照num 组内渲染排序 与其他css 排序无关
          * 如果捕获组有 unit 会自动处理单位问题
          * order是权重值,order越大,生成的css越靠后,覆盖前面的css
          */
          regExp() {
              return new RegExp(`^${config.prefix}-primary-box$`);
          },
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
              '通用盒子': {
                  prefix: `${config.prefix}-primary-box`, //代码提示触发前缀
                  body: `${config.prefix}-primary-box` //代码提示内容
                  }
              }
          };
      };
  },
  mediaQueries: {
      // 前面为前缀 后面为媒体属性
      // 属性相同则覆盖自带属性
      sm: '(min-width: 640px)',
      md: '(min-width: 768px)',
      lg: '(min-width: 1024px)',
      xl: '(min-width: 1280px)'
  },
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
  },
  ```
