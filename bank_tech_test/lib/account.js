class Account {
  constructor(statementFormatter) {
    this.statementFormatter = statementFormatter;
    this.transactions = [];
  }

  // Default to the most recent transaction and thus latest balance
  getBalance() {
    return this.#calculateBalanceAtIndex(0);
  }

  deposit(amount) {
    if (this.#isInvalidNumber(amount)) throw new Error("Invalid Amount")

    this.transactions.unshift({
      amount: amount,
      dateTransacted: Date.now(),
    });
  }

  withdraw(amount) {
    if (this.#isInvalidNumber(amount)) throw new Error("Invalid Amount")

    this.transactions.unshift({
      amount: -amount,
      dateTransacted: Date.now(),
    });
  }

  printStatement() {
    return this.statementFormatter.generateStatement(this.transactions);
  }

  #calculateBalanceAtIndex(index) {
    let balance = 0;
    for (var i = index; i <= this.transactions.length - 1; i++) {
      balance += this.transactions[i].amount;
    }
    return balance;
  }

  #isInvalidNumber(amount) {
    return (amount === undefined || typeof amount !== "number");
  }
}

module.exports = Account;
