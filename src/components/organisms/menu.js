import React from "react";

import "../../css/menu.css";
import { NavLink } from "react-router-dom";

export default function Menu() {
  function uncheck() {
    document.getElementById("menu-btn").checked = false;
  }

  return (
    <div className="menu-wrap">
      <input type="checkbox" className="toggler" id="menu-btn"></input>
      <div className="hamburger">
        <div></div>
      </div>
      <div className="menu">
        <div>
          <div>
            <ul>
              <li>
                <NavLink to="/" onClick={uncheck}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/aboutMe" onClick={uncheck}>
                  About Me
                </NavLink>
              </li>
              <li>
                <NavLink to="/places" onClick={uncheck}>
                  Places
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
