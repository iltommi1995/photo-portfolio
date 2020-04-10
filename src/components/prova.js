import React from "react";

import dataFoto from "../data/photos.json";

export default function Prova() {
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
  function filterPlace(data) {
    return data.place == "grenoble";
  }
  var foto2020 = dataFoto.filter(year2020).filter(filterPlace);
  var foto2019 = dataFoto.filter(year2019).filter(filterPlace);
  var foto2018 = dataFoto.filter(year2018).filter(filterPlace);
  var foto2017 = dataFoto.filter(year2017).filter(filterPlace);
  var foto2016 = dataFoto.filter(year2016).filter(filterPlace);

  return (
    <div>
      <h1>Bella raga prova</h1>
      {foto2019.length > 0 && <h2>2019</h2>}
      {foto2019.length > 0 && foto2019.map((data) => <p>{data.id}</p>)}
    </div>
  );
}
