import React, { useEffect } from 'react';
import Routers from './router/index.jsx';

import Layout from "./component/layout/index.jsx";

import { HashRouter } from "react-router-dom";
import { use } from './pages/i18n/index.jsx';

import 'antd/dist/antd.css';

function App(){

  function setLang(){
    var lang = window.localStorage.getItem("LIXI_LANG");
    if(lang){
      use(lang);
    } else {
      use("zh");
    }
  }

  setLang()

  return (
    <HashRouter>
      <Layout>
        <Routers />
      </Layout>
    </HashRouter>
  )
}

export default App;
