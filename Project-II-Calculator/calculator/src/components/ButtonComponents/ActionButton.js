import React from "react";
import "./Button.css";

function ActionButton() {
  return (
    <div className="action-button-container">
      <div className="button action divide">/</div>
      <div className="button action multiply">X</div>
      <div className="button action subtract">-</div>
      <div className="button action add">+</div>
      <div className="button action equals">=</div>
    </div>
  );
}

export default ActionButton;
