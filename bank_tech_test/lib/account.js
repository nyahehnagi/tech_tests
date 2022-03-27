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

    let statement =  this.transactions.map ( transaction => {
      const dateTransacted = moment(transaction.dateTransacted, 'DD-MM-YYYY'); 
      const amount = transaction.getAmount()

      let statementLine = moment(dateTransacted).format("DD/MM/YYYY")
      statementLine += amount > 0 ? ` || ${amount.toFixed(2)} || || ` : ` || || ${(-amount).toFixed(2)} || `
      statementLine += `${transaction.getBalanceOnTransaction().toFixed(2)}`

      return statementLine
    })

    statement.unshift("date || credit || debit || balance")
    
    return statement.join("\r\n")
    
  }
}

module.exports = Account;
