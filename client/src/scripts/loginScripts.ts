//two pre-made card
import { CreditCards } from "../helpers/creditCard-helper";
//list of possible bank Id numbers in PT.
import { bankIds } from "../helpers/bank-helper";

//set account number based on preexisting cards
function setUser(userInfo: { cardNumber: string }, upperVal: { current: number[] }) {
  const inputs: any[] = Array.from(document.querySelectorAll(".upper-input"));
  inputs.forEach((input, i) => {
    input.value = userInfo.cardNumber[i];
    upperVal.current[i] = parseInt(userInfo.cardNumber[i]);
  });
  console.log(upperVal.current);
}

//check input submission for Login
function checkLoginSubmit(endFlag: { current: boolean }, lowerVal: number[], switchFlag1: { current: boolean }, upperVal: number[]) {
  const upperRefVal: number = upperVal.length;
  const lowerRefVal: number = lowerVal.length;

  if (!switchFlag1.current && upperRefVal === 21) {
    switchFlag1.current = true;
  }
  if (switchFlag1.current && lowerRefVal === 4) {
    endFlag.current = true;
  }
}

//final input submission for Login
function finalLoginSubmit(
  inputVal: { current: { lowerVal: number[]; upperVal?: number[]; middleVal?: number[] } },
  endFlag: { current: boolean },
  lowerVal: number[],
  switchFlag1: { current: boolean },
  upperVal: number[]
) {
  checkLoginSubmit(endFlag, lowerVal, switchFlag1, upperVal);
  if (endFlag.current) {
    inputVal.current.upperVal = upperVal;
    inputVal.current.lowerVal = lowerVal;
  }
  console.log(inputVal.current);
}

//check if Account Number match
function checkAccount(account: { upperVal: number[]; lowerVal: number[] }) {
  const accountNum: string = account.upperVal.toString().split(",").join("");
  const accountPin: string = account.lowerVal.toString().split(",").join("");
  const list = CreditCards;

  for (let card of list) {
    if (accountNum === card.cardNumber && accountPin === card.cardPin) {
      console.log("Match");
      break;
    }
    if (card.cardNumber === accountNum && accountPin !== card.cardPin) {
      console.log("Incorrect Pin");
      break;
    }
  }
}

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

export { setUser, checkLoginSubmit, finalLoginSubmit, checkAccount, verifyCardNum };
