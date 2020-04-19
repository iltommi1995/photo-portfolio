import React from "react";

import "../../css/menu.css";
import MenuBtn from "../atoms/menuBtn";
import MenuHamburger from "../atoms/menuHamburger";
import MenuList from "../molecules/menuList";

export default function Menu() {
  return (
    <div className="menu-wrap">
      <MenuBtn />
      <MenuHamburger />
      <MenuList />
    </div>
  );
}
