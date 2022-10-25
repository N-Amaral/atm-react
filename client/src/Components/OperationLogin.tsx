import React, { useRef, useEffect, useState } from "react";
import { UpperForm } from "./OperationTransfer";
import { setInputValue, keyboardInput, clearInput } from "../scripts/inputScripts";
import { setUser, checkLoginSubmit, finalLoginSubmit, checkAccount, verifyCardNum } from "../scripts/loginScripts";
import { CreditCards } from "../helpers/creditCard-helper";
import CreateAccountModal from "./CreateAccount";

//lists existing Credit Cards
const CardList = (props: any) => {
  const content: any[any] = [];
  props.list.forEach((item: any, i: number) => {
    content.push(<li key={i}>{item.cardName}</li>);
  });
  return content;
};

//custom form for pin
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

  //input values
  const upperVal: { current: number[] } = useRef([]);
  const lowerVal: { current: number[] } = useRef([]);

  //input flags
  const switchFlag: { current: boolean } = useRef(false);
  const endFlag: { current: boolean } = useRef(false);

  // current solution for lack of an event listener cleanup.
  const numberCards: { current: number } = useRef(0);

  //Credit Card def
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

  //this useEffect handles the input events
  useEffect(() => {
    const buttons: NodeListOf<Element> = document.querySelectorAll(".keypad-btn");
    const sideBtns: NodeListOf<Element> = document.querySelectorAll(".sidepad-btn");
    // event listener for each onscreen button.

    //reset/clear input
    sideBtns[1].addEventListener("click", () => {
      clearInput(endFlag, lowerVal, switchFlag, upperVal);
    });

    //confirm  final input
    sideBtns[3].addEventListener("click", () => {
      finalLoginSubmit(inputVal, endFlag, lowerVal.current, switchFlag, upperVal.current);
      checkAccount(inputVal.current);
    });

    //submit input
    Array.from(buttons).forEach((button) => {
      button.addEventListener("click", () => {
        if (!endFlag.current) {
          checkLoginSubmit(endFlag, lowerVal.current, switchFlag, upperVal.current);
          keyboardInput(button, endFlag, lowerVal.current, switchFlag, upperVal.current);
          setInputValue(endFlag, lowerVal.current, switchFlag, upperVal.current);
        }
      });
    });
  }, []);

  //this UseEffect hanldes credit card Creation plus changes to the creditList
  useEffect(() => {
    const creditCardList: NodeListOf<Element> = document.querySelectorAll("li");
    //on clicking preexisting credit cards, sets their account number
    creditCardList.forEach((entry, i) => {
      if (i >= numberCards.current) {
        entry.addEventListener("click", () => setUser(creditList[i], upperVal));
        numberCards.current++;
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
          <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#createAccModal">
            Create Card
          </button>
        </div>
      </div>
      <CreateAccountModal />
    </>
  );
};

export default OperationLogin;
