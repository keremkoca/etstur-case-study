import React from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import Modal from "react-modal";

import "./delete-modal.scss";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    padding: 0,
    overflow: "unset",
    maxWidth: "520px",
    borderRadius: "10px",
    border: "none",
  },
  overlay: {
    backgroundColor: "rgba(240, 240, 240, 0.90)",
  },
};

Modal.setAppElement(document.getElementById("root"));

export function DeleteModal({
  isOpen,
  closeModal,
  selectedHotel,
  deleteHotel,
}) {
  return (
    <Modal isOpen={isOpen} style={customStyles} onRequestClose={closeModal}>
      <div className="delete-modal-container">
        <div className="info-container">
          <div className="title-container">
            <h2>Oteli sil</h2>
          </div>
          <div className="msg-container">
            <label className="msg-label">
              <span className="msg-span">{selectedHotel.name}</span> 'i silmek
              istediğinizden emin misiniz?
            </label>
          </div>
          <div className="btn-container">
            <button
              className="btn-confirm"
              onClick={() => {
                deleteHotel(selectedHotel.id);
              }}
            >
              OTELİ SİL
            </button>
            <button className="btn-cancel" onClick={closeModal}>
              vazgeç
            </button>
          </div>
        </div>
      </div>
      <div className="close-btn-container">
        <AiFillCloseCircle onClick={closeModal} className="close-btn-icon" />
      </div>
    </Modal>
  );
}

export default DeleteModal;
