import React, { Component } from "react";
import { withRouter } from "react-router";

import PlaceAlbumCover from "../organisms/placeAlbumCover";

import FotoData from "../../data/places.json";

import "../../css/pages/placeAlbum.css";

class PlaceAlbum extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const id = this.props.match.params.id;
    return (
      <div class="outer-wrapper">
        <div class="wrapper">
          {FotoData.filter(function (e) {
            return e.id == id;
          }).map((dati) => (
            <PlaceAlbumCover name={dati.name} path={dati.img} />
          ))}

          <div class="slide one grid"></div>
        </div>
      </div>
    );
  }
}

export default withRouter(PlaceAlbum);
