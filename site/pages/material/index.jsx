import React from "react";
import { Switch, Route, NavLink } from "react-router-dom";
// import Doc from '../..//lixi-material-react/site/pages/docs/index';
import Doc from "../../../material/project/lixi-material-react/site/pages/docs/material-index"

import './index.scss';

function Material(){
  return (
          <div className="material-wrap">
            <div className="material-left">
              <NavLink
                to="/material/lixi-material-react"
                activeClassName='activeClass'
                >
                lixi-material-react
              </NavLink>
            </div>

            <div className="material-right">
              <Switch>
                <Route path="/material/lixi-material-react">
                  <Doc/>
                </Route>
              </Switch>
            </div>
          </div>
        )
}

export default Material;