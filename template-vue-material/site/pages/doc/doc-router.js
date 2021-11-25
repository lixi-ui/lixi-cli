import components from './components.js';

import Introduce from './introduce/index.vue';

var componentsRouters = []

components.forEach(item => { // ./pages/${item}.vue
  var routerObj = {
    path: '/doc/' + item.name,
    name: item.name,
    title: item.title || item.name,
    meta: { title: item.title || item.name },
    component: () => import(/* webpackChunkName: "doc" */ `../../../src/components/${item.name}/doc/index.vue`)
  }
  componentsRouters.push(routerObj)
})

var douRouter = [
  {
    path: '/doc/introduce',
    name: 'introduce',
    title: 'introduce 介绍',
    component: Introduce
  },
  ...componentsRouters
]

export default douRouter