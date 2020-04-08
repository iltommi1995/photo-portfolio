import React from "react";

export default function PlaceAlbumPhotos(props) {
  return (
    <div class={props.class}>
      <img src={props.path} />
    </div>
  );
}
