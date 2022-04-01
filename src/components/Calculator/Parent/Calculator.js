import React, { useState } from "react";
import Button from "../Child/Button";
import "./calculator.scss";
import items from "../calculatorData";

function Calculator() {

  const [input, setInput] =useState("");
  const [output, setOutput] = useState("");

  return (
    <div className="container">
      <div className="screen">
        <div className="input">{input}</div>
        <div className="output">
          <span>=</span>{output}
        </div>
      </div>
      <div className="keypad">
        {items.map((item) => (
          <Button title={item.title} value={item.value} input={input} setInput={setInput} output={output} setOutput={setOutput} />
        ))}
      </div>
    </div>
  );
}

export default Calculator;
