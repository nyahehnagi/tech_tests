class Account {
  constructor() {
    this.balance = 0
  }

  getBalance() {
    return this.balance
  }

  deposit(amount) {
    this.balance += amount
  }

}

module.exports = Account;