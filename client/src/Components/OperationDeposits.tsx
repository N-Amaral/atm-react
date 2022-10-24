import React, { useEffect, useRef } from "react";
import { checkSubmit, setInputValue, keyboardInput, clearInput, cancelInput, finalInput } from "../scripts/inputScripts";

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
      lowerVal: number[];
    };
  } = useRef({ lowerVal: [0] });

  const lowerVal: { current: number[] } = useRef([]);
  let endFlag: { current: boolean } = useRef(false);

  useEffect(() => {
    const buttons: NodeListOf<Element> = document.querySelectorAll(".keypad-btn");
    const enterBtn: NodeListOf<Element> = document.querySelectorAll(".sidepad-btn");

    //cancel input
    enterBtn[0].addEventListener("click", () => {
      cancelInput();
    });

    //clears input
    enterBtn[1].addEventListener("click", () => {
      clearInput(endFlag, lowerVal);
    });

    // confirm input
    enterBtn[3].addEventListener("click", () => {
      finalInput(inputVal, endFlag, lowerVal.current);
    });

    Array.from(buttons).forEach((button) => {
      button.addEventListener("click", () => {
        if (!endFlag.current) {
          checkSubmit(endFlag, lowerVal.current);
          keyboardInput(button, endFlag, lowerVal.current);
          setInputValue(endFlag, lowerVal.current);
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
