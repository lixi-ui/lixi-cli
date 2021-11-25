import { createApp } from 'vue';

import router from './router/index.js';
import App from "./app.vue";
// import Button from '../src/components/button/package/index.js';
import LixiUiVue from '../src/index.js';
// import LixiUi from 'lixi-ui-vue';
import demoBlock from './components/demo-block/index.vue';

import './style/index.scss'
import 'lixi-ui-vue/lib/style/styles.css'
import 'highlight.js/styles/color-brewer.css'

var app = createApp(App);
app.component('DemoBlock', demoBlock)

// .use(LixiUi)
app.use(router).use(LixiUiVue);

app.mount('#app');