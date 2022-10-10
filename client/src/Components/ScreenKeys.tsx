import React, { useEffect } from "react";

const RightKeys = () => {
  const numbers: number[] = [1, 3, 5, 7];

  return (
    <div className="key-wrapper">
      {numbers.map((number, i) => {
        return (
          <div className="screen-key scKey" id={`${number}`} key={number}>
            <span className="screenkey-symbol"></span>
          </div>
        );
      })}
    </div>
  );
};

const LeftKeys = () => {
  const numbers: number[] = [2, 4, 6, 8];
  return (
    <div className="key-wrapper-left">
      {numbers.map((number, i) => {
        return (
          <div className="screen-key-left scKey" id={`${number}`} key={number}>
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

    function checkBtn(id: number) {
      if (menuBtns[id - 1] !== undefined) {
        window.location.assign(menuBtns[id - 1].lastChild.lastChild.href);
      } else {
        return;
      }
    }

    Array.from(sideBtns).forEach((btn, i) => {
      btn.addEventListener("click", () => {
        let id: number = parseInt(btn.id);
        switch (id) {
          case 1:
            checkBtn(id);
            break;
          case 2:
            checkBtn(id);
            break;
          case 3:
            checkBtn(id);
            break;
          case 4:
            checkBtn(id);
            break;
          case 5:
            checkBtn(id);
            break;
          case 6:
            checkBtn(id);
            break;
          case 7:
            checkBtn(id);
            break;
          case 8:
            checkBtn(id);
            break;
        }
      });
    });
  }, []);

  return (
    <div className="screen-wrapper">
      <LeftKeys />
      <RightKeys />
    </div>
  );
};

export default Screenkeys;
