import React from "react";
import { Switch, Route } from "react-router-dom";

import "./css/generic.css";

import Menu from "./components/organisms/menu";
import Home from "./components/pages/home";
import Places from "./components/pages/places";
import PlaceAlbum from "./components/pages/placeAlbum";
import AboutMe from "./components/pages/aboutMe";

function App() {
  return (
    <div>
      <Menu />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path={"/places"} component={Places} />
        <Route exact path="/placeAlbum/:name" component={PlaceAlbum} />
        <Route path={"/aboutMe"} component={AboutMe} />
      </Switch>
    </div>
  );
}

export default App;
