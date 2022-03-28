class Account {
  constructor(statementFormatter) {
    this.statementFormatter = statementFormatter;
    this.transactions = [];
  }

  // Default to the most recent transaction
  getBalance(transactionID = 0) {
    return this.#calculateBalanceAtIndex(transactionID);
  }

  deposit(amount, dateTransacted) {
    this.transactions.unshift({
      amount: amount,
      dateTransacted: dateTransacted,
    });
  }

  withdraw(amount, dateTransacted) {
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
}

module.exports = Account;
