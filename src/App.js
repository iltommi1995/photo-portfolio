import React from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";

import Menu from "./components/organisms/menu";
import Home from "./components/pages/home";
import Places from "./components/pages/places";
import PlaceAlbum from "./components/pages/placeAlbum";

function App() {
  return (
    <div>
      <Menu />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path={"/places"} component={Places} />
        <Route exact path="/placeAlbum/:name" component={PlaceAlbum} />
      </Switch>
    </div>
  );
}

export default App;
