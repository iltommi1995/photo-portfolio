import React from "react";

import { NavLink } from "react-router-dom";

export default function MenuLi(props) {
  function uncheck() {
    document.getElementById("menu-btn").checked = false;
  }
  return (
    <li>
      <NavLink to={props.linkTo} onClick={uncheck}>
        {props.name}
      </NavLink>
    </li>
  );
}
