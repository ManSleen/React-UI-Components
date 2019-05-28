import React from "react";
import "./Button.css";

function NumberButton() {
  return (
    <div className="number-button-container">
      <div className="button clear">clear</div>

      <div className="button-number seven">7</div>
      <div className="button-number eight">8</div>
      <div className="button-number nine">9</div>

      <div className="button-number four">4</div>
      <div className="button-number five">5</div>
      <div className="button-number six">6</div>

      <div className="button-number one">1</div>
      <div className="button-number two">2</div>
      <div className="button-number three">3</div>

      <div className="button zero">0</div>
    </div>
  );
}

export default NumberButton;
