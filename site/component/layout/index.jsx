import React from "react";
import "./index.scss";

import { NavLink } from "react-router-dom";

function Layout(props){
  var { children } = props;

  var lang = localStorage.getItem("LIXI_LANG");

  function sclick(e){
    localStorage.setItem("LIXI_LANG", e.target.value);
    window.location.reload();
  }
  return (<div className="lx-layout">
    <div className="lx-layout-header">
      <div className="lx-logo">Lixi</div>
      <div className="lx-layout-menu">
        <ul className="lx-menu-ul">
          <li className="lx-menu-li">
            <NavLink to="/home" className="menu-item" activeClassName='active-menu'>home</NavLink>
          </li>
          <li className="lx-menu-li">
            <NavLink to="/doc" activeClassName='active-menu'>doc</NavLink>
          </li>
          <li className="lx-menu-li">
            <select id="item" value={lang} onChange={(e)=>sclick(e)}>
              <option value="zh">zh</option>
              <option value="es">es</option>
            </select>
          </li>
          {/* <li className="lx-menu-li">
            <select id="item" onChange={(e)=>sclick(e)}>
              <option value="v4">v4</option>
              <option value="v3">v3</option>
            </select>
          </li> */}
        </ul>
      </div>
    </div>
    <div className="lx-layout-content">
      { children }
    </div>
  </div>)
}

export default Layout;