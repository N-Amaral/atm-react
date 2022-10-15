import React, { useEffect, useRef } from "react";
import { checkSubmit, setValue, keyboardInput, clearInput, cancelInput, finalInput } from "../scripts/scripts";

const UpperForm = () => {
  const content: any[any] = [];
  for (let i: number = 0; i <= 4; i++) {
    content.push(
      <span className="inner-container" key={i}>
        <input className="input-style upper-input" type={"tel"} maxLength={1} readOnly required></input>
      </span>
    );
  }
  return content;
};

const MiddleForm = () => {
  const content: any[any] = [];
  for (let i: number = 0; i < 9; i++) {
    content.push(
      <span className="inner-container" key={i}>
        <input className="input-style middle-input" type={"tel"} maxLength={1} readOnly required></input>
      </span>
    );
  }
  return content;
};

const LowerForm = () => {
  const content: any[any] = [];
  for (let i: number = 0; i < 7; i++) {
    if (i === 2) {
      content.push(
        <span className="inner-container" key={i}>
          <span>.</span>
          <input className="input-style lower-input" type={"tel"} maxLength={1} readOnly required></input>
        </span>
      );
    } else if (i === 5) {
      content.push(
        <span className="inner-container" key={i}>
          <span>,</span>
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

const OperationPayment = () => {
  const inputVal: {
    current: {
      upperVal: number[];
      middleVal: number[];
      lowerVal: number[];
    };
  } = useRef({ upperVal: [0], middleVal: [0], lowerVal: [0] });

  const upperVal: { current: number[] } = useRef([]);
  const middleVal: { current: number[] } = useRef([]);
  const lowerVal: { current: number[] } = useRef([]);

  let switchFlag1: { current: boolean } = useRef(false);
  let switchFlag2: { current: boolean } = useRef(false);
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
      clearInput(endFlag, lowerVal, switchFlag1, upperVal, switchFlag2, middleVal);
    });

    //confirm input
    enterBtn[3].addEventListener("click", () => {
      finalInput(inputVal, endFlag, lowerVal.current, switchFlag1, upperVal.current, switchFlag2, middleVal.current);
    });

    Array.from(buttons).forEach((button) => {
      button.addEventListener("click", () => {
        if (!endFlag.current) {
          checkSubmit(endFlag, lowerVal.current, switchFlag1, upperVal.current, switchFlag2, middleVal.current);
          keyboardInput(button, endFlag, lowerVal.current, switchFlag1, upperVal.current, switchFlag2, middleVal.current);
          setValue(endFlag, lowerVal.current, switchFlag1, upperVal.current, switchFlag2, middleVal.current);
        }
      });
    });
  }, []);

  return (
    <>
      <div className="title-container">
        <h1>pagamento de serviços/compras</h1>
      </div>
      <div className="request-container payment">
        <h3>elementos da factura</h3>
        <div className="upper-request">
          <h3 style={{ marginRight: "3.5rem" }}>entidade:</h3>
          <div>
            <UpperForm />
          </div>
        </div>
        <div className="middle-request">
          <h3>referência:</h3>
          <div>
            <MiddleForm />
          </div>
        </div>
        <div className="lower-request">
          <h3 style={{ marginRight: "2.7rem" }}>montante:</h3>
          <div>
            <LowerForm />
            <span>
              <h3>Euro</h3>
            </span>
          </div>
        </div>
      </div>
      <div className="warning-container">
        <h5>Confirme os dados com a tecla verde</h5>
      </div>
    </>
  );
};

export { LowerForm };
export default OperationPayment;
