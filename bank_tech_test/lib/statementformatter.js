const moment = require("moment");
const STATEMENT_HEADER = "date || credit || debit || balance";

class StatementFormatter {
  constructor(account) {
    this.account = account;
  }

  generateStatement() {
    let statement = this.account.getTransactions().map((transaction, index) => {
      return this.#formatStatementLine(transaction, index);
    });

    this.#addStatementHeader(statement);
    return statement.join("\r\n");
  }

  #addStatementHeader(statement) {
    return statement.unshift(STATEMENT_HEADER);
  }

  #formatStatementLine(transaction, index) {
    let statementLine = this.#formatTransactionDate(transaction);
    statementLine += this.#formatDebitCredit(transaction);
    statementLine += this.#formatBalanceAtTransaction(index);
    return statementLine;
  }

  #formatBalanceAtTransaction(index) {
    return `${this.account.getBalance(index).toFixed(2)}`;
  }

  #formatDebitCredit(transaction) {
    const amount = transaction.amount;
    return amount > 0
      ? ` || ${amount.toFixed(2)} || || `
      : ` || || ${(-amount).toFixed(2)} || `;
  }

  #formatTransactionDate(transaction) {
    const dateTransacted = moment(transaction.dateTransacted, "DD-MM-YYYY");
    return moment(dateTransacted).format("DD/MM/YYYY");
  }
}

module.exports = StatementFormatter;
