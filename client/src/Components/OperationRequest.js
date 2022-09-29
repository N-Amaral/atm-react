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

const OperationRequest = () => {
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

  // function sideKeysType() {
  //   const sideButtons = document.querySelectorAll(".sidepad-btn");
  //   Array.from(sideButtons).forEach((button) => {
  //     button.addEventListener("click", () => {
  //       console.log(button.innerText);
  //     });
  //   });
  // }

  useEffect(() => {
    function checkSubmit() {
      let upperRefVal = upperVal.current;
      let lowerRefVal = lowerVal.current;

      if (!switchFlag.current && upperRefVal.length === 22) {
        switchFlag.current = true;
      }
      if (switchFlag.current && lowerRefVal.length === 6) {
        endFlag.current = true;
      }
    }

    function evalSubmit(value, index, input) {
      if (value[index] === undefined) {
        input.value = "";
      } else {
        input.value = value[index];
      }
    }
    function setValue() {
      const upperValue = upperVal.current;
      const lowerValue = lowerVal.current;
      const inputs = !switchFlag.current ? document.querySelectorAll(".upper-input") : document.querySelectorAll(".lower-input");

      Array.from(inputs).forEach((input, i) => {
        if (!switchFlag.current) {
          evalSubmit(upperValue, i, input);
        } else {
          evalSubmit(lowerValue, i, input);
        }
      });
    }

    function keyboardType(button) {
      let btnValue = button.innerText;
      const value = !switchFlag.current ? upperVal.current : lowerVal.current;

      value.push(btnValue);
    }

    const buttons = document.querySelectorAll(".keypad-btn");

    Array.from(buttons).forEach((button) => {
      button.addEventListener("click", () => {
        if (!endFlag.current) {
          checkSubmit();
          keyboardType(button);
          setValue();
        } else {
          setInputVal({
            upperVal: upperVal,
            lowerVal: lowerVal,
          });
        }
        console.log(inputVal);
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
          <div>
            <h3>Introduza o N.I.B do Destinatário</h3>
            <span>
              <p>(Número de Identificação Bancária)</p>
            </span>
          </div>
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

export default OperationRequest;
