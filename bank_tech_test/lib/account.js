const Transaction = require("./transaction");
const moment = require("moment")

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

    return this.transactions.map ( transaction => {
      var dateTransacted = moment(transaction.dateTransacted, 'DD-MM-YYYY'); 
      return moment(dateTransacted).format("DD/MM/YYYY") + " || 1000.00 || || 1000.00"  
    }).join()
    
  }
}

module.exports = Account;
