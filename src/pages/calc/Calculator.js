import React, { useState } from "react";
import "./calculator.css";

function Calculator() {
  const [number, setNumber] = useState("");
  const [result, setResult] = useState("");

  const operator = ["*", "+", "-", "=", "/", "."];

  const calculation = (value) => {
    if (
      (operator.includes(value) && number === "") ||
      (operator.includes(value) && operator.includes(number.slice(-1)))
    ) {
      return;
    }
    setNumber(number + value);
    if (!operator.includes(value)) {
      setResult(eval(number + value).toString());
    }
  };
  const digits = () => {
    const digit = [];
    for (let i = 1; i < 10; i++) {
      digit.push(
        <button onClick={() => calculation(i.toString())} key={i}>
          {i}
        </button>
      );
    }
    return digit;
  };
  const deleteNumber = () => {
    if (number === "") {
      return;
    }
    setNumber(number.slice(0, -1));
  };
  const finalResult = () => {
    setNumber(eval(number).toString());
    setResult(0)
  };
  return (
    <div className="title">
      <h1>Calculator</h1>
      <div className="calculator">
        <div className="calc-container">
          <div className="display">
            {result ? <span>{result}</span> : ""} {number || "0"}
          </div>
          <div className="btn-operator">
            <button onClick={() => calculation("/")}>/</button>
            <button onClick={() => calculation("*")}>x</button>
            <button onClick={() => calculation("+")}>+</button>
            <button onClick={() => calculation("-")}>-</button>
            <button onClick={() => deleteNumber()}>DEL</button>
          </div>
          <div className="btn">
            {digits()}
            <button onClick={() => calculation("0")}>0</button>
            <button onClick={() => calculation(".")}>.</button>
            <button onClick={finalResult}>=</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
