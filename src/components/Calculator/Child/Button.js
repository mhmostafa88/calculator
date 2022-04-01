import React from "react";
import "./button.scss";

function Button({ title, value, input, setInput, output, setOutput }) {
  const displayNumber = (e) => {
    e.preventDefault();
    let number = (input += e.target.value);
    if (!number.includes('value')) {
      setInput(number.replace(/^0/, ''))
    }
  };

  const clear = () => {
    setInput('0');
    setOutput('0');
  };
  const deleteLastDigit = () => {
    setInput(input.slice(0,-1)) // or you can use input.length-1
  };

  const percentage = () => {
    setInput(input/100)
  };

  const calculate = () => {
    try {
      // let calculation = eval(input)
      let calculation = Function('return ' + input)
      setOutput(calculation)
    } catch (error) {
      setOutput(input.slice(0,-1))
    }
  };

  return (
    <button
      value={value}
      onClick={
        value === "ac"
          ? clear
          : displayNumber && value === "delete"
          ? deleteLastDigit
          : displayNumber && value === "%"
          ? percentage
          : displayNumber && value === "="
          ? calculate
          : displayNumber
      }
    >
      {title}
    </button>
  );
}

export default Button;
