import React from "react";
import { bankIds } from "../helpers/bank-helper";

const CardList = () => {
  return (
    <>
      <div className="card-list"></div>
    </>
  );
};

const CreateAccount = () => {
  function makeCardNum(cardNum: number[]) {
    while (cardNum.length !== 21) {
      const num: number = Math.floor(Math.random() * 10);
      cardNum.push(num);
    }

    return cardNum;
  }

  function verifyCardNum() {
    const cardNum: number[] = [];
    const finished = parseInt(cardNum.join(""));

    for (let i = 0; i < 100; i++) {
      makeCardNum(cardNum);
      if (finished % 97 === 1) {
        console.log(finished);
      }
      console.log(i);
    }
  }

  function createCard() {
    const cardNum = [];
  }
  verifyCardNum();
  return (
    <>
      <div className="cardList-wrapper"></div>
    </>
  );
};

export default CreateAccount;
