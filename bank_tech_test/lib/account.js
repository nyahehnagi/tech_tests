class Account {
  constructor(transactionClass, statementFormatterClass) {
    this.transactionClass = transactionClass;
    this.statementFormatterClass = statementFormatterClass;
    this.transactions = [];
  }

  getBalance(transactionID) {
    return !transactionID ? this.#calculateBalanceAtIndex(0) : this.#calculateBalanceAtIndex(transactionID)
  }

  deposit(amount, dateTransacted) {
    this.transactions.unshift(
      new this.transactionClass(amount, dateTransacted, this.balance)
    );
  }

  withdraw(amount, dateTransacted) {
    this.transactions.unshift(
      new this.transactionClass(-amount, dateTransacted, this.balance)
    );
  }

  getTransactions(){
    return this.transactions
  }

  printStatement() {
    return new this.statementFormatterClass(this.self).generateStatement()
  }

  #calculateBalanceAtIndex(index){
    let balance = 0
    for (var i = index ; i <= this.transactions.length -1; i++) {
      balance += this.transactions[i].getAmount()
    }
    return balance
  }

}

module.exports = Account;
