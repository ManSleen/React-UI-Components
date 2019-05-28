import React from "react";
import "./App.css";
import CalculatorDisplay from "./components/DisplayComponents/CalculatorDisplay";
import ActionButton from "./components/ButtonComponents/ActionButton";
import NumberButton from "./components/ButtonComponents/NumberButton";

const App = () => {
  return (
    <div className="app-container">
      <CalculatorDisplay />
      <div className="button-container">
        <div className="row">
          <ActionButton buttonStyle="clear" text="clear" />
          <NumberButton buttonStyle="red" text="/" />
        </div>
        <div className="row">
          <NumberButton buttonStyle="white" text="7" />
          <NumberButton buttonStyle="white" text="8" />
          <NumberButton buttonStyle="white" text="9" />
          <NumberButton buttonStyle="red" text="x" />
        </div>
        <div className="row">
          <NumberButton buttonStyle="white" text="4" />
          <NumberButton buttonStyle="white" text="5" />
          <NumberButton buttonStyle="white" text="6" />
          <NumberButton buttonStyle="red" text="-" />
        </div>
        <div className="row">
          <NumberButton buttonStyle="white" text="1" />
          <NumberButton buttonStyle="white" text="2" />
          <NumberButton buttonStyle="white" text="3" />
          <NumberButton buttonStyle="red" text="+" />
        </div>
        <div className="row">
          <NumberButton buttonStyle="zero" text="0" />
          <NumberButton buttonStyle="red" text="=" />
        </div>
      </div>
    </div>
  );
};

export default App;
