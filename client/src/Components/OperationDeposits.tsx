import React, { useEffect, useRef } from "react";
import { checkSubmit, setValue, keyboardInput } from "../scripts/scripts";

const DepositForm = () => {
  const content: any[any] = [];
  for (let i: number = 0; i < 5; i++) {
    if (i === 2) {
      content.push(
        <span className="inner-container" key={i}>
          <span>.</span>
          <input className="input-style lower-input" type={"tel"} maxLength={1} readOnly required></input>
        </span>
      );
    } else {
      content.push(
        <span className="inner-container" key={i}>
          <input className="input-style lower-input" type={"tel"} maxLength={1} readOnly required></input>
        </span>
      );
    }
  }
  return content;
};

const OperationDeposits = () => {
  const inputVal: {
    current: {
      depositVal: number[];
    };
  } = useRef({ depositVal: [0] });

  const lowerVal: { current: number[] } = useRef([]);
  let endFlag: { current: boolean } = useRef(false);

  useEffect(() => {
    const buttons: NodeListOf<Element> = document.querySelectorAll(".keypad-btn");
    const enterBtn: NodeListOf<Element> = document.querySelectorAll(".sidepad-btn");

    // listener for confirm btn, checks end state and if reached, sets state
    enterBtn[3].addEventListener("click", () => {
      checkSubmit(endFlag, lowerVal.current);
      if (endFlag.current) {
        inputVal.current.depositVal = lowerVal.current;
        console.log(inputVal.current);
      }
    });

    Array.from(buttons).forEach((button) => {
      button.addEventListener("click", () => {
        if (!endFlag.current) {
          checkSubmit(endFlag, lowerVal.current);
          keyboardInput(button, endFlag, lowerVal.current);
          setValue(endFlag, lowerVal.current);
        }
      });
    });
  }, []);

  return (
    <>
      <div className="title-container">
        <h1>depositos</h1>
      </div>
      <div className="request-container deposit">
        <div className="lower-request">
          <h3>montante a depositar :</h3>
          <div>
            <DepositForm />
            <span>
              <h3>Euro</h3>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default OperationDeposits;
