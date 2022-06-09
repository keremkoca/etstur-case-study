import React, { useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { MAX_SCORE, MIN_SCORE } from "../../utils/constants";

import "./hotel-card.scss";

import { ScoreButton } from "..";

export const HotelCard = ({ hotel, openModal, setHotelList, hotelList }) => {
  const [isMouseOver, setIsMouseOver] = useState(false);

  const increaseScore = () => {
    const updatedHotels = hotelList.map((h) => {
      if (h.id === hotel.id) {
        if (h.score < MAX_SCORE) {
          return { ...h, score: h.score + 1 };
        }
      }
      return h;
    });
    setHotelList(updatedHotels);
  };

  const decreaseScore = () => {
    const updatedHotels = hotelList.map((h) => {
      if (h.id === hotel.id) {
        if (h.score > MIN_SCORE) {
          return { ...h, score: h.score - 1 };
        }
      }
      return h;
    });

    setHotelList(updatedHotels);
  };
  return (
    <div
      onMouseOver={() => {
        setIsMouseOver(true);
      }}
      onMouseLeave={() => {
        setIsMouseOver(false);
      }}
      className="container"
      style={
        isMouseOver ? { backgroundColor: " rgba(240, 240, 240, 0.9)" } : null
      }
    >
      <div className="inner-container">
        <div className="img-container">
          <img alt="hotelImg" src={hotel.imgUrl}></img>
        </div>
        <div className="hotel-info-container">
          <div className="hotel-info">
            <div className="hotel-title">
              <p>{hotel.name}</p>
            </div>
            <div className="hotel-score">
              <p>{`${hotel.score} Puan`}</p>
            </div>
          </div>
          <div className="btn-container">
            <ScoreButton
              onClick={increaseScore}
              name={"puan artır"}
            ></ScoreButton>
            <ScoreButton
              onClick={decreaseScore}
              name={"puan azalt"}
            ></ScoreButton>
          </div>
        </div>
      </div>
      {isMouseOver && (
        <div
          className="open-delete-btn-container"
          style={{ position: "relative" }}
        >
          <button
            className="open-delete-btn"
            style={{
              backgroundColor: "transparent",
              border: "none",
              position: "absolute",
              top: -15,
              right: -15,
            }}
            onClick={() => openModal(hotel)}
          >
            {
              <AiFillCloseCircle
                className="open-delete-btn-icon"
                style={{ fontSize: "35px", color: "red" }}
              />
            }
          </button>
        </div>
      )}
    </div>
  );
};

export default HotelCard;
