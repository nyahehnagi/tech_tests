class Transaction {
  constructor(amount, dateTransacted, balanceOnTransaction) {
    this.amount = amount;
    this.dateTransacted = dateTransacted;
  }

  getAmount() {
    return this.amount;
  }

  getDateTransacted() {
    return this.dateTransacted;
  }
}

module.exports = Transaction;
