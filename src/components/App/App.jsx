import React, { useState } from "react";

import "../../css/normalize.scss";
import "../../css/core.scss";

import appleSvg from "../../assets/apple.svg";

export default function App() {
  document.title = "Calculator";
  return (
    <div className="pageWrapper">
      <div className="pageInner">
        <header className="header">
          <img src={appleSvg} alt="the Apple logo" />
          <span>File</span>
          <span>Edit</span>
          <span>View</span>
          <span>Special</span>
        </header>
        <main className="main">
          <Calculator />
        </main>
      </div>
    </div>
  );
}

function Calculator() {
  const [calculation, setCalculation] = useState(0);
  return (
    <div className="calculator">
      <div className="calculatorBar">Calculator</div>
      <div className="calculatorInner">
        <div className="calculatorContent">
          <div className="calculatorDisplay">{calculation}</div>
          <div className="calculatorRow">
            <div className="calculatorBtn">C</div>
            <div className="calculatorBtn">E</div>
            <div className="calculatorBtn">=</div>
            <div className="calculatorBtn">*</div>
          </div>
          <div className="calculatorRow">
            <div className="calculatorBtn">7</div>
            <div className="calculatorBtn">8</div>
            <div className="calculatorBtn">9</div>
            <div className="calculatorBtn">/</div>
          </div>
          <div className="calculatorRow">
            <div className="calculatorBtn">4</div>
            <div className="calculatorBtn">5</div>
            <div className="calculatorBtn">6</div>
            <div className="calculatorBtn">-</div>
          </div>
          <div className="calculatorColumns">
            <div>
              <div className="calculatorRow">
                <div className="calculatorBtn">1</div>
                <div className="calculatorBtn">2</div>
                <div className="calculatorBtn">3</div>
              </div>
              <div className="calculatorRow calculatorRow--last">
                <div className="calculatorBtn calculatorBtn--wide">0</div>
                <div className="calculatorBtn calculatorBtn--bottom">.</div>
              </div>
            </div>
            <div className="calculatorBtn calculatorBtn--tall">+</div>
          </div>
        </div>
      </div>
    </div>
  );
}
