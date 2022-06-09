import React from "react";

import "./score-button.scss";

export function ScoreButton({ name, onClick }) {
  return (
    <button className={"button-styles"} onClick={onClick}>
      {name}
    </button>
  );
}

export default ScoreButton;
