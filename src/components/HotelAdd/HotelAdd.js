import React from "react";
import { BsPlusSquare } from "react-icons/bs";
import { Link } from "react-router-dom";

import "./hotel-add.scss";

export function HotelAdd() {
  return (
    <div className="hotel-add-container">
      <Link to="/create-hotel" className="hotel-add-link">
        <BsPlusSquare className="hotel-add-icon" />
      </Link>
      <h2 className="hotel-add-title">Otel ekle</h2>
    </div>
  );
}

export default HotelAdd;
