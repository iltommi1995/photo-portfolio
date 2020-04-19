import React from "react";

import MenuLi from "../atoms/menuLi";

export default function MenuList() {
  return (
    <div className="menu">
      <div>
        <div>
          <ul>
            <MenuLi linkTo="/" name="Home" />
            <MenuLi linkTo="/aboutMe" name="About Me" />
            <MenuLi linkTo="/places" name="Places" />
          </ul>
        </div>
      </div>
    </div>
  );
}
