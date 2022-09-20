import React from "react";

const RightKeys = () => {
  const numbers = [1, 2, 3];
  return (
    <div className="key-wrapper">
      {numbers.map((number) => {
        return (
          <div className="screen-key">
            <span className="screenkey-symbol"></span>
          </div>
        );
      })}
    </div>
  );
};

const LeftKeys = () => {
  const numbers = [1, 2, 3];
  return (
    <div className="key-wrapper-left">
      {numbers.map((number) => {
        return (
          <div className="screen-key-left">
            <span className="screenkey-symbol-left"></span>
          </div>
        );
      })}
    </div>
  );
};

const Screenkeys = () => {
  return (
    <div className="screen-wrapper">
      <RightKeys />
      <LeftKeys />
    </div>
  );
};

export default Screenkeys;
