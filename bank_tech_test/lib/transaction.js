class Transaction {
  constructor(amount, dateTransacted, balanceOnTransaction) {
    this.amount = amount;
    this.dateTransacted = dateTransacted
    this.balanceOnTransaction = balanceOnTransaction
  }

  getAmount() {
    return this.amount;
  }

  getDateTransacted() {
    return this.dateTransacted;
  }

  getBalanceOnTransaction() {
    return this.balanceOnTransaction;
  }
}

module.exports = Transaction;