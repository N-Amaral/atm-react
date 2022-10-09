import React, { useEffect } from "react";

const RightKeys = () => {
  const numbers: number[] = [1, 2, 3, 4];
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
  const numbers: number[] = [5, 6, 7, 8];
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
    const sideBtns: NodeListOf<Element> = document.querySelectorAll(".scKey");
    const menuBtns: any[any] = Array.from(document.querySelectorAll(".operation-item"));
    Array.from(sideBtns).forEach((btn, i) => {
      btn.addEventListener("click", () => {
        switch (i) {
          case 0:
            console.log(i, menuBtns[0].textContent);
            break;
          case 1:
            console.log(i, menuBtns[2].textContent);
            break;
          case 2:
            console.log(i, menuBtns[4].textContent);
            break;
          case 3:
            console.log(i, menuBtns[3].textContent);
            break;
          case 4:
            console.log(i, menuBtns[1].textContent);
            break;
          case 5:
            console.log(i, menuBtns[3].textContent);
            break;
          case 6:
            console.log(i, menuBtns[5].textContent);
            break;
          case 7:
            console.log(i, menuBtns[5].textContent);
            break;
        }
      });
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
