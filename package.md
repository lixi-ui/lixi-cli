### 依赖包介绍
```js
"devDependencies": {
    "@babel/core": "^7.13.16", // babel 核心。 有6版本,7版本
    "@babel/plugin-transform-runtime": "^7.13.15",// 解决一些没有的 api , 例如 'string'.inculde()。 与 
    "@babel/preset-env": "^7.13.15", // 预解析 babel. 可以接下 jsx 语法。
    "@babel/preset-react": "^7.13.13", // 与解析 react 
    "babel-loader": "^8.2.2", // babel
    "copy-webpack-plugin": "^8.1.1", // 复制代码到打包的文件
    "html-webpack-plugin": "^5.3.1", // 配合 webpack-dev-server. 将代码 插入到 index.html 中
    "node-dev": "^6.7.0", // node-dev 环境. 预防 windows 与 linix 的操作系统的不同
    "webpack": "^5.35.0", // 打包脚本
    "webpack-dev-server": "^3.11.2" // 服务系统
  },
  "dependencies": {
    "react": "^17.0.2", // react 17 版本
    "react-dom": "^17.0.2", // react-dom 需要与 react 同步
    "react-router-dom": "^5.2.0" // react-router-dom 路由处理
  }
```