import React, { useEffect, useRef, useState } from "react";
import { checkSubmit, setValue } from "../scripts/scripts";

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
  const [inputVal, setInputVal] = useState({ depositVal: [0] });

  const lowerVal: { current: number[] } = useRef([]);
  let endFlag: { current: boolean } = useRef(false);

  useEffect(() => {
    // takes input from,checks for end state flag and pushes it to the current ref
    function keyboardType(button: any) {
      //checks if input pressed is 00
      const checkVal: number[] | undefined = button.innerText === "00" ? [0, 0].flat(1) : undefined;
      const btnValue: number | number[] = checkVal !== undefined ? checkVal.flat(1) : parseInt(button.innerText);
      const value: any[] = lowerVal.current;

      //read checkVal and consumes its input
      if (checkVal !== undefined) {
        if (!endFlag.current && lowerVal.current.length <= 3) {
          checkVal.forEach((val) => {
            value.push(val);
          });
        }
      }
      //if checkVal and endlfag not set, consumes input
      if (!endFlag.current && checkVal === undefined) {
        value.push(btnValue);
      }
    }

    const buttons: NodeListOf<Element> = document.querySelectorAll(".keypad-btn");
    const enterBtn: NodeListOf<Element> = document.querySelectorAll(".sidepad-btn");

    // listener for confirm btn, checks end state and if reached, sets state
    enterBtn[3].addEventListener("click", () => {
      checkSubmit(endFlag, lowerVal.current);
      if (endFlag.current) {
        setInputVal({
          depositVal: lowerVal.current,
        });
      }
    });

    Array.from(buttons).forEach((button) => {
      button.addEventListener("click", () => {
        if (!endFlag.current) {
          checkSubmit(endFlag, lowerVal.current);
          keyboardType(button);
          setValue(endFlag, lowerVal.current);
        }
      });
    });
  }, [inputVal]);
  console.log(inputVal.depositVal);
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
