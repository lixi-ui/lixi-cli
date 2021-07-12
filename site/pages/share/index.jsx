import React from 'react';
import './index.scss';

import Express from './express/index.jsx';

import {
  Switch,
  Route,
  NavLink,
} from "react-router-dom";

function Share() {
    return (<div className = "doc">
            <div className = "doc-left" >
            <div className = "logo" >
        </div> 
        <ul>
            <li className="doc-li" >
                <NavLink to="/share/express" activeClassName='activeClass'> express 入门 </NavLink> 
            </li>
        </ul> 
        </div> 
        <div className = "doc-right" >
          <Switch>
            <Route path = "/share/express">
                <Express/>
            </Route>
          </Switch>

        </div> 
        </div>
    )
}

export default Share;