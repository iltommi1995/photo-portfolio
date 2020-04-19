import React, { useState } from "react";

import Modal from "react-modal";

import "../../css/organisms/placeAlbumPhotos.css";

export default function PlaceAlbumPhotos(props) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <div class={props.class}>
      <img src={props.path} onClick={() => setModalIsOpen(!modalIsOpen)} />
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
        <button
          onClick={() => setModalIsOpen(!modalIsOpen)}
          className="btn-close-modal"
        >
          Close
        </button>
      </Modal>
    </div>
  );
}
