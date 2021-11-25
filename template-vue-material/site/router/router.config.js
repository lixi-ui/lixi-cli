import Home from "../pages/home/index.vue";
import Doc from "../pages/doc/index.vue";
import Login from "../pages/login/index.vue";

// import Button from '../../src/components/button/doc/index.vue'
// import Tree from '../../src/components/tree/doc/index.vue'

import docRouter from '../pages/doc/doc-router';

var routes = [
  {
    path: "/",
    redirect: '/home'
  },
  {
    path: "/home",
    name: 'name',
    component: Home
  },
  {
    path: "/doc",
    name: 'doc',
    redirect: '/doc/introduce',
    component: Doc,
    children: docRouter
  }
]

export default routes;