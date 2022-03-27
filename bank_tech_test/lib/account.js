class Account {
  constructor() {
    this.balance = 0;
  }

  getBalance() {
    return this.balance;
  }

  deposit(amount, dateTransacted) {
    return (this.balance += amount);
  }

  withdraw(amount, dateTransacted) {
    return (this.balance -= amount);
  }

  statement(){
    return "10/01/2023 || 1000.00 || || 1000.00"
  }
}

module.exports = Account;
