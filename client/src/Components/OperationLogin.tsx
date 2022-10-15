import React, { useRef, useEffect } from "react";
import { UpperForm } from "./OperationTransfer";
import { checkSubmit, setValue, keyboardInput, clearInput, finalInput } from "../scripts/scripts";

const PinForm = () => {
  const content: any[any] = [];
  for (let i: number = 0; i < 4; i++) {
    content.push(
      <span className="inner-container" key={i}>
        <input className="input-style lower-input" type={"tel"} maxLength={1} readOnly required></input>
      </span>
    );
  }
  return content;
};

const OperationLogin = () => {
  const inputVal: {
    current: {
      upperVal: number[];
      lowerVal: number[];
    };
  } = useRef({ upperVal: [0], lowerVal: [0] });

  const upperVal: { current: number[] } = useRef([]);
  const lowerVal: { current: number[] } = useRef([]);

  let switchFlag: { current: boolean } = useRef(false);
  let endFlag: { current: boolean } = useRef(false);

  useEffect(() => {
    const buttons: NodeListOf<Element> = document.querySelectorAll(".keypad-btn");
    const enterBtn: NodeListOf<Element> = document.querySelectorAll(".sidepad-btn");
    // event listener for each onscreen button.

    enterBtn[1].addEventListener("click", () => {
      clearInput(endFlag, lowerVal, switchFlag, upperVal);
    });

    //confirm input
    enterBtn[3].addEventListener("click", () => {
      finalInput(inputVal, endFlag, lowerVal.current, switchFlag, upperVal.current);
    });

    Array.from(buttons).forEach((button) => {
      button.addEventListener("click", () => {
        if (!endFlag.current) {
          checkSubmit(endFlag, lowerVal.current, switchFlag, upperVal.current);
          keyboardInput(button, endFlag, lowerVal.current, switchFlag, upperVal.current);
          setValue(endFlag, lowerVal.current, switchFlag, upperVal.current);
        }
      });
    });
  }, []);
  return (
    <>
      <div className="title-container">
        <h1>login</h1>
      </div>
      <div className="request-container login">
        <div className="upper-request">
          <h3>numero de conta</h3>
          <div>
            <UpperForm />
          </div>
        </div>
        <div className="lower-request">
          <h3>pin</h3>
          <div>
            <PinForm />
          </div>
        </div>
      </div>
    </>
  );
};

export default OperationLogin;
