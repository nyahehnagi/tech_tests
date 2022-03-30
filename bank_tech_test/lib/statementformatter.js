const moment = require("moment");
const STATEMENT_HEADER = "date || credit || debit || balance";

class StatementFormatter {
  generateStatement(account) {
    let statement = account.getTransactions().map((transaction, index) => {
      return this.#formatStatementLine(transaction, account.getBalance(index));
    });

    this.#addStatementHeader(statement);
    return statement.join("\r\n");
  }

  #addStatementHeader(statement) {
    return statement.unshift(STATEMENT_HEADER);
  }

  #formatStatementLine(transaction, balance) {
    let statementLine = this.#formatTransactionDate(transaction);
    statementLine += this.#formatDebitCredit(transaction);
    statementLine += this.#formatBalanceAtTransaction(balance);
    return statementLine;
  }

  #formatBalanceAtTransaction(balance) {
    return `${balance.toFixed(2)}`;
  }

  #formatDebitCredit(transaction) {
    const amount = transaction.amount;
    return amount > 0
      ? ` || ${amount.toFixed(2)} || || `
      : ` || || ${(-amount).toFixed(2)} || `;
  }

  #formatTransactionDate(transaction) {
    return moment(transaction.dateTransacted).format("DD/MM/YYYY");
  }
}

module.exports = StatementFormatter;
