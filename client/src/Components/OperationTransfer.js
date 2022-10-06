import { React, useEffect, useRef, useState } from "react";

const UpperForm = () => {
  let content = [];
  for (let i = 0; i < 21; i++) {
    content.push(
      <span className="inner-container" key={i}>
        <input className="input-style upper-input" type={"tel"} maxLength={1} readOnly required></input>
      </span>
    );
  }
  return content;
};

const LowerForm = () => {
  let content = [];
  for (let i = 0; i < 7; i++) {
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

const OperationTransfer = () => {
  const [inputVal, setInputVal] = useState({
    upperVal: [],
    lowerVal: [],
  });

  const upperVal = useRef([]);
  const lowerVal = useRef([]);
  let switchFlag = useRef(false);
  let endFlag = useRef(false);

  // function handleChange(event) {
  //   if (!/[0-9]/.test(event.key)) {
  //     event.preventDefault();
  //   }
  // }

  useEffect(() => {
    // checks length of refs to determine if input is fully set for submission
    function checkSubmit() {
      let upperRefVal = upperVal.current;
      let lowerRefVal = lowerVal.current;

      if (!switchFlag.current && upperRefVal.length === 21) {
        switchFlag.current = true;
      }
      if (switchFlag.current && lowerRefVal.length === 7) {
        endFlag.current = true;
      }
    }
    // reflects the actual submission of input to the input value itself
    function evalSubmit(value, index, input) {
      if (value[index] === undefined) {
        input.value = "";
      } else {
        input.value = value[index];
      }
    }

    // takes above function and submits according to limits. Switches between upper inputs and lower
    function setValue() {
      const upperValue = upperVal.current;
      const lowerValue = lowerVal.current;
      const inputs = !switchFlag.current ? document.querySelectorAll(".upper-input") : document.querySelectorAll(".lower-input");

      Array.from(inputs).forEach((input, i) => {
        if (!endFlag.current && !switchFlag.current) {
          evalSubmit(upperValue, i, input);
        } else if (!endFlag.current && switchFlag.current) {
          evalSubmit(lowerValue, i, input);
        }
      });
    }

    // takes the values selected on the the on-screen keyboard and pushes it to the right refValue
    function keyboardType(button) {
      let btnValue = button.innerText;
      const value = !switchFlag.current ? upperVal.current : lowerVal.current;

      value.push(btnValue);
    }

    const buttons = document.querySelectorAll(".keypad-btn");
    const enterBtn = document.querySelectorAll(".sidepad-btn");
    // event listener for each onscreen button.

    //confirms input from ref to state
    enterBtn[3].addEventListener("click", () => {
      checkSubmit();
      if (endFlag.current) {
        setInputVal({
          upperVal: upperVal.current,
          lowerVal: lowerVal.current,
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

  return (
    <>
      <div className="title-container">
        <h1>transferência multibanco</h1>
      </div>
      <div className="request-container">
        <div className="upper-request">
          <h3>Introduza o N.I.B do Destinatário</h3>
          <span>
            <p>(Número de Identificação Bancária)</p>
          </span>
          <form>
            <UpperForm />
          </form>
        </div>
        <div className="lower-request">
          <div>
            <h3>Introduza a Importância a transferir</h3>
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

export default OperationTransfer;
