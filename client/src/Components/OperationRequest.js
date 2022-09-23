import { React, useEffect, useState } from "react";

const UpperForm = (props) => {
  function handleChange(event) {
    if (!/[0-9]/.test(event.key)) {
      event.preventDefault();
    }
  }
  function spreadVal(upperVal) {
    const value = [upperVal];
    const inputs = document.querySelectorAll(".upper-input");
    console.log(upperVal);
  }

  let content = [];
  for (let i = 0; i < 21; i++) {
    content.push(
      <span className="inner-container" key={i}>
        <input
          className="input-style upper-input"
          type={"tel"}
          maxLength={1}
          value={props.upperVal}
          onChange={handleChange}
          onClick={spreadVal(props.upperVal)}
          required
        ></input>
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
          <input className="input-style lower-input" type={"tel"} maxLength={1} required></input>
        </span>
      );
    } else if (i === 5) {
      content.push(
        <span className="inner-container" key={i}>
          <span>,</span>
          <input className="input-style lower-input" type={"tel"} maxLength={1} required></input>
        </span>
      );
    } else {
      content.push(
        <span className="inner-container" key={i}>
          <input className="input-style lower-input" type={"tel"} maxLength={1} required></input>
        </span>
      );
    }
  }
  return content;
};

const OperationRequest = (props) => {
  const [inputVal, setInputVal] = useState([""]);

  function handleChange(event) {
    if (!/[0-9]/.test(event.key)) {
      event.preventDefault();
    }
  }

  function keyboardType() {
    const buttons = document.querySelectorAll(".keypad-btn");
    const input = document.querySelectorAll(".upper-input");

    Array.from(buttons).forEach((button) => {
      button.addEventListener("click", () => {
        const newVal = [...inputVal].push(button.innerHTML);
        setInputVal(inputVal + newVal);
      });
    });
  }

  function sideKeysType() {
    const sideButtons = document.querySelectorAll(".sidepad-btn");
    Array.from(sideButtons).forEach((button) => {
      button.addEventListener("click", () => {
        console.log(button.innerText);
      });
    });
  }

  useEffect(() => {
    const inputs = document.querySelectorAll(".input-style");
    Array.from(inputs).forEach((input) => {
      input.addEventListener("keydown", handleChange);
    });
    keyboardType();
    sideKeysType();
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
            <UpperForm upperVal={inputVal} />
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
