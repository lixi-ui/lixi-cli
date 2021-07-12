import React from 'react';
import './index.scss';
// import Button from "../../../src/component/button/doc/index.jsx";
// import Input from "../../../src/component/input/doc/index.jsx";
// import Tree from "../../../src/component/tree/doc/index.jsx";

import Introduce from './introduce/index.jsx';
import Develop from './develop/index.jsx';
import Construct from './construct/index.jsx';
import Test from './test/index.jsx';
import Server from './server/index.jsx';
import Deploy from './deploy/index.jsx';

import {
  Switch,
  Route,
  NavLink,
} from "react-router-dom";

function Doc() {
    return (<div className = "doc">
            <div className = "doc-left" >
            <div className = "logo" >
        </div> 
        <ul>
            <li className="doc-li" >
                <NavLink to="/doc/introduce" activeClassName='activeClass'> introduce 介绍 </NavLink> 
            </li> 
            <li className="doc-li" >
                <NavLink to="/doc/develop" activeClassName='activeClass'> develop 开发 </NavLink> 
            </li> 
            <li className="doc-li" >
                <NavLink to="/doc/construct" activeClassName='activeClass'> construct 构建 </NavLink>
            </li>
            <li className = "doc-li" >
                <NavLink to="/doc/test" activeClassName='activeClass'> test 测试 </NavLink>
            </li>
            <li className = "doc-li" >
                <NavLink to="/doc/server" activeClassName='activeClass'> server 服务 </NavLink>
            </li>
            <li className = "doc-li" >
                <NavLink to="/doc/deploy" activeClassName='activeClass'> deploy 部署 </NavLink>
            </li>
        </ul> 
        </div> 
        <div className = "doc-right" >
        <Switch>
            <Route path = "/doc/introduce">
                <Introduce/>
            </Route>
            <Route path = "/doc/develop" >
                <Develop/>
            </Route>
            <Route path = "/doc/construct" >
                <Construct/>
            </Route>
            <Route path = "/doc/test" >
                <Test/>
            </Route>
            <Route path = "/doc/server" >
                <Server/>
            </Route>
            <Route path = "/doc/deploy" >
                <Deploy/>
            </Route>
        </Switch> 
        </div> 
        </div>
    )
}

export default Doc;