import React from "react";

export default function PlaceAlbumCover(props) {
  const Background = props.path;

  return (
    <div
      class="image image-placeAlbumCover"
      style={{ backgroundImage: `url(${Background})` }}
    >
      <div class="h1-placeAlbumCover">
        <h1>{props.name}</h1>
      </div>
    </div>
  );
}
