import { React, useEffect } from "react";

const OperationRequest = (props) => {
  function handleChange(event) {
    if (!/[0-9]/.test(event.key)) {
      event.preventDefault();
    }
  }

  useEffect(() => {
    const inputs = document.querySelectorAll(".input-style");
    Array.from(inputs).forEach((input) => {
      input.addEventListener("keydown", handleChange);
    });
  }, []);
  return (
    <div className="request-container">
      <div className="request">
        <form>
          <span className="inner-container">
            <input className="input-style" type={"tel"} maxLength={1} required></input>
          </span>
          <span className="inner-container">
            <input className="input-style" type={"tel"} maxLength={1} required></input>
          </span>
          <span className="inner-container">
            <input className="input-style" type={"tel"} maxLength={1} required></input>
          </span>
          <span className="inner-container">
            <input className="input-style" type={"tel"} maxLength={1} required></input>
          </span>
          <span className="inner-container">
            <input className="input-style" type={"tel"} maxLength={1} required></input>
          </span>
        </form>
      </div>
    </div>
  );
};

// <div>
// <label for="nif-inpt">NIF</label>
// <input type={"number"} name="nif-inpt"></input>
// </div>
// <div>
// <label for="val-inpt">VALUE</label>
// <input type={"number"} name="val-inpt"></input>
// </div>

export default OperationRequest;
