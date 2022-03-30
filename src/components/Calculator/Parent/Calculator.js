import React from "react";
import Button from "../Child/Button";
import "./calculator.scss";
import items from '../calculatorData';

function Calculator() {
  return (
    <div className="container">
      <div className="screen">
        <div className="input">125</div>
        <div className="output">
          <span>=</span>258
        </div>
      </div>
      <div className="keypad">
        {items.map((item) => (
          <Button title={item.title} value={item.value}/>
  ))}
        
      </div>
    </div>
  );
}

export default Calculator;
