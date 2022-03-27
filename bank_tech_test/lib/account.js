const Transaction = require("./transaction");
const moment = require("moment");

class Account {
  constructor(transactionClass) {
    this.transactionClass = transactionClass;
    this.transactions = [];
  }

  getBalance() {
    return this.#calculateBalanceAtIndex(0);
  }

  deposit(amount, dateTransacted) {
    this.transactions.unshift(
      new Transaction(amount, dateTransacted, this.balance)
    );
  }

  withdraw(amount, dateTransacted) {
    this.transactions.unshift(
      new Transaction(-amount, dateTransacted, this.balance)
    );
  }

  statement() {
    let statement = this.transactions.map((transaction, index) => {
      return this.#formatStatementLine(transaction, index)
    });

    this.#addStatementHeader(statement)

    return statement.join("\r\n");
  }

  #addStatementHeader(statement){
    return statement.unshift("date || credit || debit || balance");
  }

  #formatStatementLine(transaction, index){
    const dateTransacted = moment(transaction.dateTransacted, "DD-MM-YYYY");
    const amount = transaction.getAmount();

    let statementLine = moment(dateTransacted).format("DD/MM/YYYY");
    statementLine +=
      amount > 0
        ? ` || ${amount.toFixed(2)} || || `
        : ` || || ${(-amount).toFixed(2)} || `;
    statementLine += `${this.#calculateBalanceAtIndex(index).toFixed(2)}`;

    return statementLine;
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
