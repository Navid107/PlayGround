import React, { useState } from "react";
import "./calculator.css";

function Calculator() {
  const [number, setNumber] = useState("");
  const digits = () => {
    const digit = [];
    for (let i = 1; i < 10; i++) {
      digit.push(<button>{i}</button>);
    }
    return digit;
  };
  return (
    <div className="title">
      <h1>Calculator</h1>
      <div className="calculator">
        <div className="calc-container">
          <div className="display">
            <span>(0)</span> 0
          </div>
          <div className="btn-operator">
            <button>/</button>
            <button>x</button>
            <button>+</button>
            <button>-</button>
            <button>DEL</button>
          </div>
          <div className="btn">{digits()}</div>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
