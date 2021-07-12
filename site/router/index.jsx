import React from "react";
import {
  Switch,
  Route
} from "react-router-dom";
import Home from '../pages/home/index.jsx';
import Doc from '../pages/docs/index.js';

var Routers = () => {
  return (
    <Switch>
      <Route path="/home">
        <Home/>
      </Route>
      <Route path="/doc">
        <Doc/>
      </Route>
    </Switch>
  )
}

export default Routers;