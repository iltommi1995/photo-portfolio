import React from "react";
import { NavLink } from "react-router-dom";

export default function Place(props) {
  return (
    <div className="place">
      <NavLink to={"/placeAlbum/" + props.place.name}>
        <div
          className="posto-image"
          style={{ backgroundImage: `url(${props.place.img})` }}
        ></div>
      </NavLink>
      <h2 className="posto-title">{props.place.name}</h2>
    </div>
  );
}
