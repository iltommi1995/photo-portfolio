import React from "react";

import "../../css/pages/places.css";

import Place from "../organisms/place";

import placesData from "../../data/places.json";

export default function Places() {
  return (
    <div className="outer-wrapper">
      <div className="wrapper">
        <div className="grid grid-places">
          {placesData.map((data) => (
            <Place place={data} />
          ))}
        </div>
      </div>
    </div>
  );
}
