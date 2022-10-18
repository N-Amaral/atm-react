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
  function makeCardNum() {
    const ind: number = Math.floor(Math.random() * 23);
    const bankNum: string[] = bankIds.bankNum;
    let tempNum: string = bankNum[ind] + "0000";
    let restNum: string = "";

    while (restNum.length !== 13) {
      restNum += Math.floor(Math.random() * 10).toString();
    }
    return parseInt((tempNum += restNum));
  }

  function verifyCardNum() {
    let tempCardNum: number = makeCardNum();
    let fCardNum: string = "";
    while (tempCardNum % 97 !== 1) {
      tempCardNum = makeCardNum();
    }
    if (tempCardNum.toString().length === 21) {
      fCardNum = tempCardNum.toString();
    }
    if (tempCardNum.toString().length <= 19) {
      fCardNum = "00" + tempCardNum.toString();
    } else {
      fCardNum = "0" + tempCardNum.toString();
    }
    return fCardNum;
  }

  function createCard() {
    let card = verifyCardNum();
    if (card.length > 21) {
      card = verifyCardNum();
    } else {
      console.log(card.length);
    }
  }

  createCard();
  return (
    <>
      <div className="cardList-wrapper"></div>
    </>
  );
};

export default CreateAccount;
