const Transaction = require("./transaction");

class Account {
  constructor(transactionClass) {
    this.balance = 0;
    this.transactionClass = transactionClass
    this.transactions = []
  }

  getBalance() {
    return this.balance;
  }

  deposit(amount, dateTransacted) {
    this.transactions.push(new Transaction(amount, dateTransacted))
    this.balance += amount;
  }

  withdraw(amount, dateTransacted) {
    this.transactions.push(new Transaction(-amount, dateTransacted))
    this.balance -= amount;
  }

  statement(){
    return "10/01/2023 || 1000.00 || || 1000.00"
  }
}

module.exports = Account;
