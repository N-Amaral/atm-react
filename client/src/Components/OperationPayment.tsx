import React, { useEffect, useRef, useState } from "react";
import { checkSubmit, setValue } from "../scripts/scripts";

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
  const [inputVal, setInputVal] = useState({
    upperVal: [0],
    middleVal: [0],
    lowerVal: [0],
  });

  const upperVal: { current: number[] } = useRef([]);
  const middleVal: { current: number[] } = useRef([]);
  const lowerVal: { current: number[] } = useRef([]);

  let switchFlag1: { current: boolean } = useRef(false);
  let switchFlag2: { current: boolean } = useRef(false);
  let endFlag: { current: boolean } = useRef(false);

  useEffect(() => {
    // function setValue(
    //   upperVal: number[],
    //   middleVal: number[],
    //   lowerVal: number[],
    //   switchFlag1: { current: boolean },
    //   switchFlag2: { current: boolean },
    //   endFlag: { current: boolean }
    // ) {
    //   const inputs: NodeListOf<Element> = !switchFlag1.current
    //     ? document.querySelectorAll(".upper-input")
    //     : switchFlag1.current && !switchFlag2.current
    //     ? document.querySelectorAll(".middle-input")
    //     : document.querySelectorAll(".lower-input");

    //   Array.from(inputs).forEach((input: Element, i: number) => {
    //     if (!switchFlag1.current) {
    //       evalSubmit(upperVal, i, input);
    //     } else if (switchFlag1.current && !switchFlag2.current) {
    //       evalSubmit(middleVal, i, input);
    //     } else if (!endFlag.current && switchFlag2.current) {
    //       evalSubmit(lowerVal, i, input);
    //     }
    //   });
    // }

    function keyboardType(button: any) {
      const checkVal: number[] | undefined = button.innerText === "00" ? [0, 0].flat(1) : undefined;
      const btnValue: number | number[] = checkVal !== undefined ? checkVal.flat(1) : parseInt(button.innerText);
      const value: any[] = !switchFlag1.current ? upperVal.current : switchFlag1.current && !switchFlag2.current ? middleVal.current : lowerVal.current;

      if (!endFlag.current && checkVal !== undefined) {
        if (
          (!switchFlag1.current && !switchFlag2.current && value.length <= 3) ||
          (switchFlag1.current && !switchFlag2.current && value.length <= 7) ||
          (switchFlag2.current && value.length <= 5)
        ) {
          checkVal.forEach((val) => {
            value.push(val);
          });
        }
      }
      if (!endFlag.current && checkVal === undefined) {
        value.push(btnValue);
      }
    }

    const buttons: NodeListOf<Element> = document.querySelectorAll(".keypad-btn");
    const enterBtn: NodeListOf<Element> = document.querySelectorAll(".sidepad-btn");
    enterBtn[3].addEventListener("click", () => {
      checkSubmit(endFlag, lowerVal.current, switchFlag1, upperVal.current, switchFlag2, middleVal.current);
      if (endFlag.current) {
        setInputVal({
          upperVal: upperVal.current,
          middleVal: middleVal.current,
          lowerVal: lowerVal.current,
        });
      }
    });
    Array.from(buttons).forEach((button) => {
      button.addEventListener("click", () => {
        if (!endFlag.current) {
          checkSubmit(endFlag, lowerVal.current, switchFlag1, upperVal.current, switchFlag2, middleVal.current);
          keyboardType(button);
          setValue(endFlag, lowerVal.current, switchFlag1, upperVal.current, switchFlag2, middleVal.current);
        }
      });
    });
  }, [inputVal]);
  console.log(inputVal);
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
    </>
  );
};

export { LowerForm };
export default OperationPayment;
