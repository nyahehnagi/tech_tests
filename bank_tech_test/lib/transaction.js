class Transaction {
  constructor(amount, dateTransacted) {
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
