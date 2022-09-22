import { React, useEffect } from "react";

const OperationRequest = (props) => {
  function handleChange(event) {
    if (!/[0-9]/.test(event.key)) {
      event.preventDefault();
    }
  }

  const Form = () => {
    let content = [];
    for (let i = 0; i < 21; i++) {
      content.push(
        <span className="inner-container" key={i}>
          <input className="input-style upper-input" type={"tel"} maxLength={1} required></input>
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
  useEffect(() => {
    const inputs = document.querySelectorAll(".input-style");
    Array.from(inputs).forEach((input) => {
      input.addEventListener("keydown", handleChange);
    });
  }, []);
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
            <Form />
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
