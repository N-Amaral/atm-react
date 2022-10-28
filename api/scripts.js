const CreditCard = require("./classList");

module.exports = {
  bankNum: [
    "0007",
    "0010",
    "0018",
    "0019",
    "0022",
    "0023",
    "0025",
    "0032",
    "0033",
    "0035",
    "0036",
    "0038",
    "0043",
    "0045",
    "0046",
    "0059",
    "0061",
    "0065",
    "0079",
    "0193",
    "0269",
    "0781",
    "5180",
  ],

  makeCardNum: function () {
    //randomized number to be used alongside bankNum
    const ind = Math.floor(Math.random() * 23);
    const bankNum = bankNum;
    //takes randomized index for one of the bank Id numbers and add 0000 in place of a branch number
    let tempNum = bankNum[ind] + "0000";
    let restNum = "";

    //fills up rest of the number sequence with randomized numbers.
    while (restNum.length !== 13) {
      restNum += Math.floor(Math.random() * 10).toString();
    }
    return parseInt((tempNum += restNum));
  },

  //validates card number
  verifyCardNum: function () {
    let tempCardNum = makeCardNum();
    let fCardNum = "";
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
  },

  //starts card creating and validation.
  createCard: function (name, pin) {
    let card = verifyCardNum();
    //secondary validation - temporary measure for now
    if (card.length > 21) {
      card = verifyCardNum();
    } else {
      return new CreditCard(name, card, pin);
    }
  },
};
