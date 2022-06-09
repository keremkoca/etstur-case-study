import React, { useState } from "react";
import { generateId } from "../../utils/helperFunctions";
import { IMG_URL } from "../../utils/constants";
import { useNavigate } from "react-router-dom";
import { CreateButton } from "../../components";

import "./create-hotel.scss";

export function CreateHotel({ setHotelList }) {
  const [hotelName, setHotelName] = useState("");
  const [isCreated, setIsCreated] = useState(false);

  let navigate = useNavigate();

  const handleOnCreateHotel = () => {
    if (hotelName) {
      const hotel = {
        id: generateId(),
        name: hotelName,
        imgUrl: IMG_URL,
        score: 0,
        createdAt: Date.now(),
        updatedAt: Date.now(),
      };
      setHotelList((prev) => [hotel, ...prev]);
      setIsCreated(true);
      setHotelName("");
    } else return;
  };

  return (
    <div className="create-hotel-container">
      <div className="title-container">
        <h2>Otel Adi</h2>
      </div>
      <div className="input-container">
        <input
          className="input-area"
          onFocus={() => setIsCreated(false)}
          onChange={(e) => setHotelName(e.target.value)}
          value={hotelName}
          type="text"
        />
      </div>
      <div className="btn-container">
        <button
          className="return-btn"
          onClick={() => {
            navigate("/");
          }}
        >
          GERİ
        </button>
        <CreateButton isCreated={isCreated} onClick={handleOnCreateHotel} />
      </div>
    </div>
  );
}

export default CreateHotel;
