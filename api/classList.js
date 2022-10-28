//Credit Card def
class CreditCard {
  constructor(name, number, pin) {
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

module.exports = CreditCard;
