class Account {
  constructor(statementFormatterClass) {
    this.statementFormatterClass = statementFormatterClass;
    this.transactions = [];
  }

  getBalance(transactionID) {
    return !transactionID
      ? this.#calculateBalanceAtIndex(0)
      : this.#calculateBalanceAtIndex(transactionID);
  }

  deposit(amount, dateTransacted) {
    this.transactions.unshift(
      {amount: amount, dateTransacted: dateTransacted}
    );
  }

  withdraw(amount, dateTransacted) {
    this.transactions.unshift(
      {amount: -amount, dateTransacted: dateTransacted}
    );
  }

  getTransactions() {
    return this.transactions;
  }

  printStatement() {
    return new this.statementFormatterClass(this).generateStatement();
  }

  #calculateBalanceAtIndex(index) {
    let balance = 0;
    for (var i = index; i <= this.transactions.length - 1; i++) {
      balance += this.transactions[i].amount;
    }
    return balance;
  }
}

module.exports = Account;
