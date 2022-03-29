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

  deposit(amount, dateTransacted) {
    this.#validateInput(amount, dateTransacted);

    this.transactions.unshift({
      amount: amount,
      dateTransacted: dateTransacted,
    });
  }

  withdraw(amount, dateTransacted) {
    this.#validateInput(amount, dateTransacted);

    this.transactions.unshift({
      amount: -amount,
      dateTransacted: dateTransacted,
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
    if (!this.#validDate(dateTransacted)) {
      throw new Error("Invalid Date");
    }
    if (!this.#validNumber(amount)) {
      throw new Error("Invalid Amount");
    }
  }

  #validDate(dateTransacted) {
    return moment(dateTransacted, "DD-MM-YYYY", true).isValid();
  }

  #validNumber(amount) {
    return !(amount === undefined || typeof amount !== "number");
  }
}

module.exports = Account;
