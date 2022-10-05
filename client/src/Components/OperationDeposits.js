import React from "react";

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
  return (
    <>
      <div className="title-container">
        <h1>depositos</h1>
      </div>
      <div className="request-container deposit">
        <div className="lower-request">
          <h3>montante:</h3>
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
