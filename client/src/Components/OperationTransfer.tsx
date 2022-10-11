import React, { useEffect, useRef } from "react";
import { checkSubmit, setValue, keyboardInput } from "../scripts/scripts";

const UpperForm = () => {
  const content: any[any] = [];
  for (let i: number = 0; i < 21; i++) {
    content.push(
      <span className="inner-container" key={i}>
        <input className="input-style upper-input" type={"tel"} maxLength={1} readOnly required></input>
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

const OperationTransfer = () => {
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
    // takes the values selected on the the on-screen keyboard and pushes it to the right refValue
    // function keyboardType(button: any) {
    //   const checkVal: number[] | undefined = button.innerText === "00" ? [0, 0].flat(1) : undefined;
    //   const btnValue: number | number[] = checkVal !== undefined ? checkVal.flat(1) : parseInt(button.innerText);
    //   const value: any[] = !switchFlag.current ? upperVal.current : lowerVal.current;
    //   if (!endFlag.current && checkVal !== undefined) {
    //     if ((switchFlag.current && value.length <= 5) || (!switchFlag.current && value.length <= 19)) {
    //       checkVal.forEach((val) => {
    //         value.push(val);
    //       });
    //     }
    //   }
    //   if (!endFlag.current && checkVal === undefined) {
    //     value.push(btnValue);
    //   }
    // }

    const buttons: NodeListOf<Element> = document.querySelectorAll(".keypad-btn");
    const enterBtn: NodeListOf<Element> = document.querySelectorAll(".sidepad-btn");

    //confirms input from ref to state
    enterBtn[3].addEventListener("click", () => {
      checkSubmit(endFlag, lowerVal.current, switchFlag, upperVal.current);
      if (endFlag.current) {
        inputVal.current.upperVal = upperVal.current;
        inputVal.current.lowerVal = lowerVal.current;
        console.log(inputVal.current);
      }
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

export { UpperForm };
export default OperationTransfer;
