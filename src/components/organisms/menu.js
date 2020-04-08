import React from "react";

import "../../css/menu.css";
import { NavLink } from "react-router-dom";

export default function Menu() {
  return (
    <div className="menu-wrap">
      <input type="checkbox" className="toggler"></input>
      <div className="hamburger">
        <div></div>
      </div>
      <div className="menu">
        <div>
          <div>
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <a href="#">About me</a>
              </li>
              <li>
                <NavLink to="/places">Places</NavLink>
              </li>
              <li>
                <a href="#">Analog</a>
              </li>
              <li>
                <a href="#">Digital</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
