import React, { useState } from "react";

import Modal from "react-modal";

export default function Image() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <div>
      <p onClick={() => setModalIsOpen(!modalIsOpen)}>Open modal</p>
      <Modal isOpen={modalIsOpen}>
        <h2>Modal Title</h2>
        <p>Bella raga</p>
        <button onClick={() => setModalIsOpen(!modalIsOpen)}>Open modal</button>
      </Modal>
    </div>
  );
}
