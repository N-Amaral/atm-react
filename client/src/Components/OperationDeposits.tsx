import React, { useEffect, useRef, useState } from "react";

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

  const tempVal: { current: number[] } = useRef([]);
  let endFlag: { current: boolean } = useRef(false);

  useEffect(() => {
    // Checks submission for end state
    function checkSubmit() {
      let input: number[] = tempVal.current;

      if (input.length === 5) {
        endFlag.current = true;
      }
    }

    // alters inputs on screen to reflect change
    function evalSubmit(val: number[], i: number, input: any) {
      if (val[i] === undefined) {
        input.value = "";
      } else {
        input.value = val[i];
      }
    }
    //evaluates submission
    function setValue() {
      const value: number[] = tempVal.current;
      const inputs: NodeListOf<Element> = document.querySelectorAll(".lower-input");
      Array.from(inputs).forEach((input: Element, i: number) => {
        evalSubmit(value, i, input);
      });
    }
    // takes input from,checks for end state flag and pushes it to the current ref
    function keyboardType(button: any) {
      //checks if input pressed is 00
      const checkVal: number[] | undefined = button.innerText === "00" ? [0, 0].flat(1) : undefined;
      const btnValue: number | number[] = checkVal !== undefined ? checkVal.flat(1) : parseInt(button.innerText);
      const value: any[] = tempVal.current;

      //read checkVal and consumes its input
      if (checkVal !== undefined) {
        if (!endFlag.current && tempVal.current.length <= 3) {
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
      checkSubmit();
      if (endFlag.current) {
        setInputVal({
          depositVal: tempVal.current,
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
