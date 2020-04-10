import React from "react";
import { NavLink } from "react-router-dom";

import "../../css/organisms/place.css";

export default function Place(props) {
  return (
    <div className="place">
      <NavLink to={"/placeAlbum/" + props.place.name}>
        <div className="posto-image">
          <img src={props.place.img} class></img>
        </div>
      </NavLink>
      <h2 className="posto-title">{props.place.name}</h2>
    </div>
  );
}
