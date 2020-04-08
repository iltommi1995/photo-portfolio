import React from "react";

import "../../css/pages/places.css";
import "../../css/generic.css";

export default function Places() {
  return (
    <div className="outer-wrapper">
      <div className="wrapper">
        <div className="grid grid-places">
          <div className="posto1">
            <a href="rome.html">
              <div className="posto-image img-pl-1"></div>
            </a>
            <h2 className="posto-title">Rome</h2>
          </div>
          <div className="posto2">
            <a href="grenoble.html">
              <div className="posto-image img-pl-2"></div>
            </a>
            <h2 className="posto-title">Grenoble</h2>
          </div>
          <div className="posto3">
            <div className="posto-image"></div>
            <h2 className="posto-title">Milan</h2>
          </div>
          <div className="posto4">
            <div className="posto-image"></div>
            <h2 className="posto-title">London</h2>
          </div>
          <div className="posto5">
            <div className="posto-image"></div>
            <h2 className="posto-title">Chile</h2>
          </div>
          <div className="posto6">
            <div className="posto-image"></div>
            <h2 className="posto-title">Costa Rica</h2>
          </div>
          <div className="posto7">
            <div className="posto-image"></div>
            <h2 className="posto-title">Berlin</h2>
          </div>
          <div className="posto8">
            <div className="posto-image"></div>
            <h2 className="posto-title">Stockholm</h2>
          </div>
          <div className="posto9">
            <div className="posto-image"></div>
            <h2 className="posto-title">Corniglio</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
