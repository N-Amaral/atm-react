import React, { useState } from "react";
//list of possible bank Id numbers in PT.
import { bankIds } from "../helpers/bank-helper";
//two pre-made credit cards
import { CreditCards } from "../helpers/creditCard-helper";

const CardList = (props: any) => {
  const content: any[any] = [];

  props.list.forEach((item: any, i: number) => {
    content.push(<li key={i}>{item.cardName}</li>);
  });
  return content;
};

const CreateAccount = () => {
  class CreditCard {
    _cardName: string;
    _cardNumber: string;
    _cardPin: string;
    _cardOperations: { deposits: string[]; withdrawls: string[]; transfers: string[]; payments: string[] };

    constructor(name: string, number: string, pin: string) {
      this._cardName = name;
      this._cardNumber = number;
      this._cardPin = pin;
      this._cardOperations = {
        deposits: [""],
        withdrawls: [""],
        transfers: [""],
        payments: [""],
      };
    }
  }
  //creates a base card number
  function makeCardNum() {
    //randomized number to be used alongside bankNum
    const ind: number = Math.floor(Math.random() * 23);
    const bankNum: string[] = bankIds.bankNum;
    //takes randomized index for one of the bank Id numbers and add 0000 in place of a branch number
    let tempNum: string = bankNum[ind] + "0000";
    let restNum: string = "";

    //fills up rest of the number sequence with randomized numbers.
    while (restNum.length !== 13) {
      restNum += Math.floor(Math.random() * 10).toString();
    }
    return parseInt((tempNum += restNum));
  }

  //validates card number
  function verifyCardNum() {
    let tempCardNum: number = makeCardNum();
    let fCardNum: string = "";
    while (tempCardNum % 97 !== 1) {
      tempCardNum = makeCardNum();
    }

    //in case the number is valid checks length due to the fact that some bank ids start with 00 and get deleted during conversion
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

  //starts card creating and validation.
  function createCard() {
    let card = verifyCardNum();
    //secondary validation - temporary measure for now
    if (card.length > 21) {
      card = verifyCardNum();
    } else {
      const newCard = new CreditCard("Nuno", card, "1234");
      return newCard;
    }
  }

  return (
    <>
      <div className="cardList-wrapper">
        <ul>
          <CardList list={CreditCards} />
        </ul>
      </div>
    </>
  );
};

export default CreateAccount;
