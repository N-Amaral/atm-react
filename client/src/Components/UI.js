import { React, useEffect } from "react";

const NumberKeys = (props) => {
  return (
    <>
      {props.keys.map((key, i) => {
        return (
          <button type="button" className="keypad-btn" key={`numPad${i}`}>
            {key}
          </button>
        );
      })}
    </>
  );
};

const SideKeys = (props) => {
  return (
    <>
      {props.keys.map((key, i) => {
        return (
          <div className="sidepad-btn" key={`sidePad${i}`}>
            <span className="sidepad-content">
              {key} <span className="sidepad-symbol"> {i === 0 ? "X" : i === 1 ? "<" : i === 2 ? "" : "O"} </span>
            </span>
          </div>
        );
      })}
    </>
  );
};

const Keyboard = () => {
  const numPad = ["1", "2", "3", "4", "5", "6", "7", "8", "9", ".", "0", "00"];
  const sidePad = ["anular cancel", "corrigir clear", " ", "confirmar enter"];

  useEffect(() => {
    const buttons = document.querySelectorAll(".keypad-btn");
    Array.from(buttons).forEach((button) => {
      button.addEventListener("click", () => {
        console.log(button.innerHTML);
      });
    });
  }, []);

  return (
    <div className="wrapper-keyboard">
      <div className="keyboard">
        <div className="numbers">
          <NumberKeys keys={numPad} />
        </div>
        <div className="actions">
          <SideKeys keys={sidePad} />
        </div>
      </div>
    </div>
  );
};

export default Keyboard;
