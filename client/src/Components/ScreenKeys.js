import { React, useEffect } from "react";

const RightKeys = () => {
  const numbers = [1, 2, 3, 4];
  return (
    <div className="key-wrapper">
      {numbers.map((number, i) => {
        return (
          <div className="screen-key scKey" key={i}>
            <span className="screenkey-symbol"></span>
          </div>
        );
      })}
    </div>
  );
};

const LeftKeys = () => {
  const numbers = [5, 6, 7, 8];
  return (
    <div className="key-wrapper-left">
      {numbers.map((number, i) => {
        return (
          <div className="screen-key-left scKey" key={i}>
            <span className="screenkey-symbol-left"></span>
          </div>
        );
      })}
    </div>
  );
};

const Screenkeys = () => {
  useEffect(() => {
    const sideBtns = document.querySelectorAll(".scKey");
    Array.from(sideBtns).forEach((btn, i) => {
      btn.addEventListener("click", () => console.log(i));
    });
  }, []);

  return (
    <div className="screen-wrapper">
      <RightKeys />
      <LeftKeys />
    </div>
  );
};

export default Screenkeys;
