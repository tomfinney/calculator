import React, { useState, useRef } from "react";

const row1 = ["C", "E", "=", "*"];
const row2 = ["7", "8", "9", "/"];
const row3 = ["4", "5", "6", "-"];
const row4 = ["1", "2", "3"];

const operators = ["+", "-", "/", "+"];

export default function Calculator() {
  const [calculation, setCalculation] = useState("0");
  const [parts, setParts] = useState([]);

  function calculate(parts) {
    setCalculation(eval(parts.join("")));
    setParts([]);
  }

  function handleKeyPress(key) {
    if (key === "=") {
      if (calculation !== "0") {
        calculate([...parts, calculation]);
      }
      return;
    }
    if (operators.includes(key)) {
      setParts([...parts, calculation, key]);
      setCalculation("0");
      return;
    }
    if (key === "C") {
      setCalculation("0");
      setParts([]);
      return;
    }
    if (key === "." && calculation.includes(".")) {
      return;
    }
    if (key !== "." && calculation === "0") {
      setCalculation(key);
      return;
    }
    setCalculation(`${calculation}${key}`);
  }

  const calcRef = useRef(null);
  const isMoving = useRef(false);
  const originX = useRef(null);
  const originY = useRef(null);

  function handleMouseDown(e) {
    isMoving.current = true;
  }

  function handleMouseMove(e) {
    if (!isMoving.current) {
      return;
    }
    if (originX.current === null) {
      originX.current = e.clientX;
    }
    if (originY.current === null) {
      originY.current = e.clientY;
    }

    calcRef.current.style.left = `${Number(
      calcRef.current.style.left.replace("px", "")
    ) +
      (e.clientX - originX.current)}px`;
    calcRef.current.style.top = `${Number(
      calcRef.current.style.top.replace("px", "")
    ) +
      (e.clientY - originY.current)}px`;

    originX.current = e.clientX;
    originY.current = e.clientY;
  }
  function handleEnd(e) {
    isMoving.current = false;
    originX.current = null;
    originY.current = null;
  }

  return (
    <div
      className="calculator"
      ref={calcRef}
      style={{ top: 32, left: 32 }}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleEnd}
      onMouseLeave={handleEnd}
    >
      <div className="calculatorBar">Calculator</div>
      <div className="calculatorInner">
        <div className="calculatorContent">
          <div className="calculatorDisplay">{calculation}</div>
          <div className="calculatorRow">
            {row1.map(key => (
              <div
                key={key}
                className="calculatorBtn"
                onClick={() => handleKeyPress(key)}
              >
                {key}
              </div>
            ))}
          </div>
          <div className="calculatorRow">
            {row2.map(key => (
              <div
                key={key}
                className="calculatorBtn"
                onClick={() => handleKeyPress(key)}
              >
                {key}
              </div>
            ))}
          </div>
          <div className="calculatorRow">
            {row3.map(key => (
              <div
                key={key}
                className="calculatorBtn"
                onClick={() => handleKeyPress(key)}
              >
                {key}
              </div>
            ))}
          </div>
          <div className="calculatorColumns">
            <div>
              <div className="calculatorRow">
                {row4.map(key => (
                  <div
                    key={key}
                    className="calculatorBtn"
                    onClick={() => handleKeyPress(key)}
                  >
                    {key}
                  </div>
                ))}
              </div>
              <div className="calculatorRow calculatorRow--last">
                <div
                  className="calculatorBtn calculatorBtn--wide"
                  onClick={() => handleKeyPress(0)}
                >
                  0
                </div>
                <div
                  className="calculatorBtn calculatorBtn--bottom"
                  onClick={() => handleKeyPress(".")}
                >
                  .
                </div>
              </div>
            </div>
            <div
              className="calculatorBtn calculatorBtn--tall"
              onClick={() => handleKeyPress("+")}
            >
              +
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
