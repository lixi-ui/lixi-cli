# lixi-web-react

### npm install lixi-cli -g

### 需要安装依赖包。template 为脚手架安装的目录


### 安装 web 项目, 开发的业务代码
### lixi-cli create lixi-demo vue-web

### 安装 material 项目, 开发材料库
### lixi-cli create lixi-demo vue-material
```js 
  // 材料库最为核心的是
  // src/components 下的材料的组件
  // 展示 button 下面的文件
  |- button   ------------------- 组件的名称
    |- __test__ ----------------- 单元测试
      |- index.spec.js ---------- 单元测试文件 在单元测试中会很详细的说到,更多的使用方法就是源码.官方文档也有说过.
    |- doc ---------------------- 文档说明
      |- index.vue -------------- 文档说明入口文件
      |- index.md --------------- 使用 md, 去说明使用方法,一些特别需要注意的事项
    |- src ---------------------- 主要代码
      |- index.ts --------------- 主要代码的入口
      |- index.vue -------------- vue 组件
    |- style -------------------- 样式
      |- index.scss ------------- 样式的编写
  // 以上就是一个组件的编写
  // 组件开发的配置
  // 组件开发的样式
  // 组件开发 ts 的配置
  // 组件开发
```
