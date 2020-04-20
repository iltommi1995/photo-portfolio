import React, { useState } from "react";

import Modal from "react-modal";

import "../../css/organisms/placeAlbumPhotos.css";

export default function PlaceAlbumPhotos(props) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <div class={props.class}>
      <img
        src={props.path}
        onClick={() => setModalIsOpen(!modalIsOpen)}
        className="photo-placeAlbum"
      />
      <Modal isOpen={modalIsOpen} className="modale">
        <div
          className="img-modal"
          style={{
            background: `url(${props.path})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        ></div>
        <div
          className="arrow btn-close-modal"
          onClick={() => setModalIsOpen(!modalIsOpen)}
        ></div>
      </Modal>
    </div>
  );
}
