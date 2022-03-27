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
    this.balance += amount;
    this.transactions.unshift(new Transaction(amount, dateTransacted, this.balance))
  }

  withdraw(amount, dateTransacted) {
    this.balance -= amount;
    this.transactions.unshift(new Transaction(-amount, dateTransacted, this.balance))
  }

  statement(){

    return this.transactions.map ( transaction => {
      var dateTransacted = moment(transaction.dateTransacted, 'DD-MM-YYYY'); 
      return moment(dateTransacted).format("DD/MM/YYYY") + ` || ${transaction.getAmount().toFixed(2)} || || ${transaction.getBalanceOnTransaction().toFixed(2)}`  
    }).join("\r\n")
    
  }
}

module.exports = Account;
