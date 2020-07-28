# webpack-typescript-react-starter

一个快速开始搭建项目的脚手架。

## 功能
- `webpack` (4.x)
- `react` `react-dom` (16.x) 
- `typescript` (3.x)
- `css` 
- `less`
- `scss`
- `sass`
- `eslint`
- `react-router`
- `redux` & `redux-thunk`
- `antd` (3.x)
- `jest`


## 变更记录

从新到旧排列:
- 给 antd UI 库添加 `babel-plugin-import` 插件
- 从 `ts-loader` 转向 `babel-loader`
- 添加 antd UI 库([解决icons都导入的问题](https://github.com/ant-design/babel-plugin-import/issues/352#issuecomment-549652348))
- 完成 lint 配置
- 完成样式的支持 `css` `less` `sass` `scss`
- 完成 `react` `react-dom` `typescript` `webpack` 基础配置



## 依赖

### webpack 相关

`webpack` `webpack-cli` `webpack-dev-server` `webpack-merge` `clean-webpack-plugin` `html-webpack-plugin`

### typescript 相关

`typescript` <del>`ts-loader`</del> `@types/react` `@types/react-dom`

### babel 相关

npm install --save-dev @babel/core @babel/cli @babel/plugin-proposal-class-properties @babel/preset-env @babel/preset-typescript babel-loader @babel/preset-react @babel/plugin-proposal-object-rest-spread babel-plugin-import


### react 相关

`react` `react-dom`

### 样式相关

`css-loader` `style-loader` `less-loader` `sass-loader` `node-sass`

### UI 组件库

`antd` `moment`

### 测试相关

### lint 相关

参照[这个](https://www.robertcooper.me/using-eslint-and-prettier-in-a-typescript-project)来配置的

`eslint` `@typescript-eslint/parser` `@typescript-eslint/eslint-plugin` `eslint-plugin-react`
