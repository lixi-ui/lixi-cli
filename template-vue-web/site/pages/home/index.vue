<template>
  <div className="home">
    <div className="home-inner">
      <div className="home-inner-left">
        <div className="home-inner-logo"></div>
      </div>
      <div className="home-inner-right">
        <div className="home-inner-title">
          lixi
        </div>
        <div className="home-inner-content">
          Vue3.0 前端架构
        </div>
        <div className="home-inner-bottom">
          <a className="home-inner-quick" href="http://lingyuanping.top/vue/#/doc/introduce">快速开始</a>
          <a className="home-inner-github" href="https://github.com/lixi-ui/lixi-ui-vue" target="_blank">GITHUB</a>
        </div>
      </div>
    </div>
    <div className="home-gist">
      <div className="home-gist-title1">项目模块
      </div>
      <div className="home-gist-content">
        <a className="home-gist-item home-gist-web" href="http://lingyuanping.top/web/#/doc/web">
          <div className="home-gist-wrap">
            <div className="home-gist-img home-gist-img-1"></div>
            <div className="home-gist-title">web</div>
            <div className="home-gist-describe">
              了解设计指南，帮助产品设计人员搭建逻辑清晰、结构合理且高效易用的产品。
            </div>
          </div>
          <div className="home-gist-bottom">
            查看详情
          </div>
        </a>
        <a className="home-gist-item home-gist-ui" href="http://lingyuanping.top/#/home">
          <div className="home-gist-wrap">
            <div className="home-gist-img home-gist-img-2"></div>
            <div className="home-gist-title">ui</div>
            <div className="home-gist-describe">
              使用组件 Demo 快速体验交互细节；使用前端框架封装的代码帮助工程师快速开发。
            </div>
          </div>
          <div className="home-gist-bottom">
            查看详情
          </div>
        </a>
        <a className="home-gist-item home-gist-material" href="http://lingyuanping.top/web/#/doc/material">
          <div className="home-gist-wrap">
            <div className="home-gist-img home-gist-img-3"></div>
            <div className="home-gist-title">material</div>
            <div className="home-gist-describe">
              下载相关资源，用其快速搭建页面原型或高保真视觉稿，提升产品设计效率。
            </div>
          </div>
          <div className="home-gist-bottom">
            查看详情
          </div>
        </a>
      </div>
    </div>
    <div className="home-design">
      <div className="home-design-title">
        设计理念
      </div>
      <div className="home-design-content">
        <div className="home-design-item">
          一致
          <div>
            界面一致,实现一致
          </div>
        </div>
        <div className="home-design-item">
          效率
          <div>
            简化流程,清晰明确
          </div>
        </div>
        <div className="home-design-item">
          可控
          <div>
            用户决策,结果可控
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import "./index.scss";
  // import Logo from '../../assets/lixi-logo.png';
  import TypeTest from './type-test'

  export default {
    name: 'Home',
    data(){
      return {
        pageName: "home",
        // Logo: Logo
      }
    }
  }
</script>
