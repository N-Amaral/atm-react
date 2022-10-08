import React, { useState, useRef, useEffect } from "react";
import { UpperForm } from "./OperationTransfer";

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
  const [inputVal, setInputVal] = useState({
    nib: [0],
    pin: [0],
  });

  const tempNib: { current: number[] } = useRef([]);
  const tempPin: { current: number[] } = useRef([]);
  let switchFlag: { current: boolean } = useRef(false);
  let endFlag: { current: boolean } = useRef(false);

  useEffect(() => {
    function checkSubmit() {
      let upperValue: number[] = tempNib.current;
      let lowerValue: number[] = tempPin.current;

      if (!switchFlag.current && upperValue.length === 21) {
        switchFlag.current = true;
      }
      if (switchFlag.current && lowerValue.length === 4) {
        endFlag.current = true;
      }
    }

    function evalSubmit(val: number[], i: number, input: any) {
      if (val[i] === undefined) {
        input.value = "";
      } else {
        input.value = val[i];
      }
    }

    function setValue() {
      const upperValue: number[] = tempNib.current;
      const lowerValue: number[] = tempPin.current;
      const inputs: NodeListOf<Element> = !switchFlag.current ? document.querySelectorAll(".upper-input") : document.querySelectorAll(".lower-input");

      Array.from(inputs).forEach((input: Element, i: number) => {
        if (!endFlag.current && !switchFlag.current) {
          evalSubmit(upperValue, i, input);
        } else if (!endFlag.current && switchFlag.current) {
          evalSubmit(lowerValue, i, input);
        }
      });
    }

    function keyboardType(button: any) {
      const checkVal: number[] | undefined = button.innerText === "00" ? [0, 0].flat(1) : undefined;
      const btnValue: number | number[] = checkVal !== undefined ? checkVal.flat(1) : parseInt(button.innerText);
      const value: any[] = !switchFlag.current ? tempNib.current : tempPin.current;
      if (!endFlag.current && checkVal !== undefined) {
        if ((switchFlag.current && value.length <= 4) || (!switchFlag.current && value.length <= 19)) {
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
    // event listener for each onscreen button.

    //confirms input from ref to state
    enterBtn[3].addEventListener("click", () => {
      checkSubmit();
      if (endFlag.current) {
        setInputVal({
          nib: tempNib.current,
          pin: tempPin.current,
        });
      }
    });
    Array.from(buttons).forEach((button) => {
      button.addEventListener("click", () => {
        if (!endFlag.current) {
          checkSubmit();
          keyboardType(button);
          setValue();
        }
      });
    });
  }, [inputVal]);
  console.log(inputVal);
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
