import { React, useEffect, useRef, useState } from "react";

const DepositForm = () => {
  const content = [];
  for (let i = 0; i < 5; i++) {
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
  const [inputVal, setInputVal] = useState({ depositVal: [] });

  const tempVal = useRef([]);
  let endFlag = useRef(false);

  useEffect(() => {
    function checkSubmit() {
      let input = tempVal.current;

      if (input.length === 5) {
        endFlag.current = true;
      }
    }

    function evalSubmit(val, i, input) {
      if (val[i] === undefined) {
        input.value = "";
      } else {
        input.value = val[i];
      }
    }

    function setValue() {
      const value = tempVal.current;
      const inputs = document.querySelectorAll(".lower-input");
      Array.from(inputs).forEach((input, i) => {
        evalSubmit(value, i, input);
      });
    }

    function keyboardType(button) {
      let btnValue = button.innerText;
      const value = tempVal.current;
      if (!endFlag.current) {
        value.push(btnValue);
      }
    }

    const buttons = document.querySelectorAll(".keypad-btn");
    const enterBtn = document.querySelectorAll(".sidepad-btn");

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
  console.log(inputVal);
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
