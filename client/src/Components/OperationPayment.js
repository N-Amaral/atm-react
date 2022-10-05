import React from "react";

const UpperForm = () => {
  let content = [];
  for (let i = 0; i <= 4; i++) {
    content.push(
      <span className="inner-container" key={i}>
        <input className="input-style upper-input" type={"tel"} maxLength={1} readOnly required></input>
      </span>
    );
  }
  return content;
};

const MiddleForm = () => {
  let content = [];
  for (let i = 0; i < 9; i++) {
    content.push(
      <span className="inner-container" key={i}>
        <input className="input-style middle-input" type={"tel"} maxLength={1} readOnly required></input>
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

const OperationPayment = () => {
  return (
    <>
      <div className="title-container">
        <h1>pagamento de serviços/compras</h1>
      </div>
      <div className="request-container payment">
        <h3>elementos da factura</h3>
        <div className="upper-request">
          <h3 style={{ "margin-right": "3.5rem" }}>entidade:</h3>
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
          <h3 style={{ "margin-right": "2.7rem" }}>montante:</h3>
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
