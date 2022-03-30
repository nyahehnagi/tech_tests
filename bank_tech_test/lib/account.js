const moment = require("moment");

class Account {
  constructor(statementFormatter) {
    this.statementFormatter = statementFormatter;
    this.transactions = [];
  }

  // Default to the most recent transaction and thus latest balance
  getBalance(transactionLocation = 0) {
    return this.#calculateBalanceAtIndex(transactionLocation);
  }

  deposit(amount) {
    this.#validateInput(amount);

    this.transactions.unshift({
      amount: amount,
      dateTransacted: Date.now(),
    });
  }

  withdraw(amount) {
    this.#validateInput(amount);

    this.transactions.unshift({
      amount: -amount,
      dateTransacted: Date.now(),
    });
  }

  getTransactions() {
    return this.transactions;
  }

  printStatement() {
    return this.statementFormatter.generateStatement(this);
  }

  #calculateBalanceAtIndex(index) {
    let balance = 0;
    for (var i = index; i <= this.transactions.length - 1; i++) {
      balance += this.transactions[i].amount;
    }
    return balance;
  }

  #validateInput(amount, dateTransacted) {
    if (!this.#validNumber(amount)) {
      throw new Error("Invalid Amount");
    }
  }

  #validNumber(amount) {
    return !(amount === undefined || typeof amount !== "number");
  }
}

module.exports = Account;
