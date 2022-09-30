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

const PaymentRequest = () => {
  return (
    <>
      <div className="title-container">
        <h1>pagamento de serviços/compras</h1>
      </div>
      <div className="request-container">
        <h2>elementos da factura</h2>
        <div className="upper-request">
          <h3>entidade</h3>
          <UpperForm />
        </div>
        <div className="middle-request">
          <h3>referência</h3>
          <MiddleForm />
        </div>
        <div className="lower-request">
          <h3>montante</h3>
          <LowerForm />
          <span>
            <h3>Euro</h3>
          </span>
        </div>
      </div>
    </>
  );
};

export default PaymentRequest;
