import React from "react";
import { BsCheckLg } from "react-icons/bs";
import "./create-button.scss";

export function CreateButton({ isCreated, onClick }) {
  return (
    <button
      className={isCreated ? "create-btn-succes" : "create-btn-confirm"}
      disabled={isCreated}
      onClick={onClick}
    >
      <div className="btn-inner-container">
        {isCreated && (
          <div className="btn-icon-container">
            <BsCheckLg className="btn-icon" />
          </div>
        )}
        <div className="btn-text-container">
          {isCreated ? "EKLENDİ" : "ekle"}
        </div>
      </div>
    </button>
  );
}

export default CreateButton;
