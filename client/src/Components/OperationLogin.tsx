import React, { useRef, useEffect, useState } from "react";
import { UpperForm } from "./OperationTransfer";
import { checkSubmit, setValue, keyboardInput, clearInput, finalInput, setUser } from "../scripts/scripts";
import { CreditCards } from "../helpers/creditCard-helper";

//list of possible bank Id numbers in PT.
import { bankIds } from "../helpers/bank-helper";

const CardList = (props: any) => {
  const content: any[any] = [];
  props.list.forEach((item: any, i: number) => {
    content.push(<li key={i}>{item.cardName}</li>);
  });
  return content;
};

const PinForm = () => {
  const content: any[any] = [];
  for (let i: number = 0; i < 4; i++) {
    content.push(
      <span className="inner-container" key={i}>
        <input className="input-style lower-input" type={"tel"} maxLength={1} readOnly required></input>
      </span>
    );
  }
  return content;
};

const OperationLogin = () => {
  const [creditList, setCreditList] = useState([...CreditCards]);

  const inputVal: {
    current: {
      upperVal: number[];
      lowerVal: number[];
    };
  } = useRef({ upperVal: [0], lowerVal: [0] });

  const upperVal: { current: number[] } = useRef([]);
  const lowerVal: { current: number[] } = useRef([]);

  let switchFlag: { current: boolean } = useRef(false);
  let endFlag: { current: boolean } = useRef(false);

  class CreditCard {
    cardName: string;
    cardNumber: string;
    cardPin: string;
    cardOperations: { deposits: string[]; withdrawls: string[]; transfers: string[]; payments: string[] };

    constructor(name: string, number: string, pin: string) {
      this.cardName = name;
      this.cardNumber = number;
      this.cardPin = pin;
      this.cardOperations = {
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
      const newCard = new CreditCard("John Q. Public", card, "1234");

      setCreditList((prevState) => {
        return [...prevState.concat(newCard)];
      });
    }
  }

  useEffect(() => {
    const buttons: NodeListOf<Element> = document.querySelectorAll(".keypad-btn");
    const enterBtn: NodeListOf<Element> = document.querySelectorAll(".sidepad-btn");

    // event listener for each onscreen button.

    //reset/clear input
    enterBtn[1].addEventListener("click", () => {
      clearInput(endFlag, lowerVal, switchFlag, upperVal);
    });

    //confirm  final input
    enterBtn[3].addEventListener("click", () => {
      finalInput(inputVal, endFlag, lowerVal.current, switchFlag, upperVal.current);
    });

    //submit input
    Array.from(buttons).forEach((button) => {
      button.addEventListener("click", () => {
        if (!endFlag.current) {
          checkSubmit(endFlag, lowerVal.current, switchFlag, upperVal.current);
          keyboardInput(button, endFlag, lowerVal.current, switchFlag, upperVal.current);
          setValue(endFlag, lowerVal.current, switchFlag, upperVal.current);
        }
      });
    });
  }, []);

  useEffect(() => {
    const creditCardList: NodeListOf<Element> = document.querySelectorAll("li");
    //on clicking preexisting credit cards, sets their account number

    creditCardList.forEach((entry, i) => {
      if (!entry.classList.contains("set")) {
        entry.addEventListener("click", () => setUser(creditList[i], upperVal));
        entry.classList.add("set");
      }
    });
  }, [creditList]);

  return (
    <>
      <div className="title-container">
        <h1>login</h1>
      </div>
      <div className="request-container login">
        <div className="upper-request">
          <h3>numero de conta</h3>
          <div>
            <UpperForm />
          </div>
        </div>
        <div className="lower-request">
          <h3>pin</h3>
          <div>
            <PinForm />
          </div>
        </div>
      </div>
      <div className="cardList-wrapper">
        <ul className="card-list">
          <CardList list={creditList} />
        </ul>
        <div className="createCard-wrapper">
          <button className="btn btn-success" onClick={createCard} id="createBtn">
            Click Me
          </button>
        </div>
      </div>
    </>
  );
};

export default OperationLogin;
