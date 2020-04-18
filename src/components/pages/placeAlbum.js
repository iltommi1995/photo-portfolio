import React, { Component } from "react";
import { withRouter } from "react-router";

import PlaceAlbumCover from "../organisms/placeAlbumCover";

import dataFoto from "../../data/photos";

import "../../css/pages/placeAlbum.css";
import PlaceAlbumPhotos from "../organisms/placeAlbumPhotos";
import PlaceAlbumYear from "../organisms/placeAlbumYear";

class PlaceAlbum extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const name = this.props.match.params.name;

    function filterPlace(data) {
      return data.place == name;
    }

    function year2020(data) {
      return data.year == 2020;
    }
    function year2019(data) {
      return data.year == 2019;
    }
    function year2018(data) {
      return data.year == 2018;
    }
    function year2017(data) {
      return data.year == 2017;
    }
    function year2016(data) {
      return data.year == 2016;
    }

    var foto2020 = dataFoto.filter(year2020).filter(filterPlace);
    var foto2019 = dataFoto.filter(year2019).filter(filterPlace);
    var foto2018 = dataFoto.filter(year2018).filter(filterPlace);
    var foto2017 = dataFoto.filter(year2017).filter(filterPlace);
    var foto2016 = dataFoto.filter(year2016).filter(filterPlace);

    return (
      <div class="outer-wrapper">
        <div class="wrapper">
          {dataFoto
            .filter(filterPlace)
            .filter(function (e) {
              return e.mainImage == true;
            })
            .map((dati) => (
              <PlaceAlbumCover name={dati.place} path={dati.path} />
            ))}

          <div class="slide one grid">
            {foto2019.length > 0 && <PlaceAlbumYear year="2019" />}
            {foto2019.length > 0 &&
              foto2019.map((data) => (
                <PlaceAlbumPhotos class={data.class} path={data.path} />
              ))}
            {foto2018.length > 0 && <PlaceAlbumYear year="2018" />}
            {foto2018.length > 0 &&
              foto2018.map((data) => (
                <PlaceAlbumPhotos class={data.class} path={data.path} />
              ))}
            {foto2017.length > 0 && <PlaceAlbumYear year="2017" />}
            {foto2017.length > 0 &&
              foto2017.map((data) => (
                <PlaceAlbumPhotos class={data.class} path={data.path} />
              ))}
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(PlaceAlbum);
