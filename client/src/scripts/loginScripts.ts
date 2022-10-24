import { CreditCards } from "../helpers/creditCard-helper";

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
export { setUser, checkLoginSubmit, finalLoginSubmit, checkAccount };
