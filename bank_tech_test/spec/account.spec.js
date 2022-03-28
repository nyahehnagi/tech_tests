const Account = require("../lib/account.js");
const Transaction = require("../lib/transaction.js");
const StatementFormatter = require("../lib/statementformatter.js");

describe("account", () => {

  let account;
  beforeEach(() => {
    account = new Account(Transaction, StatementFormatter);
  });

  describe("#getBalance", () => {
    it("has a balance of 0 on opening/instantiation", () => {
      expect(account.getBalance()).toBe(0);
    });
  });

  describe("#getTransactions", () => {
    it("has a transaction ", () => {
      account.deposit(1000);
      expect(account.getTransactions().length).toBe(1);
    });
  });

  describe("#deposit", () => {
    it("has balance of 1000 after depositing 1000", () => {
      account.deposit(1000);
      expect(account.getBalance()).toBe(1000);
    });

    it("has balance of 3000 after depositing 1000 then 2000", () => {
      account.deposit(1000);
      account.deposit(2000);
      expect(account.getBalance()).toBe(3000);
    });
  });

  describe("withdraw", () => {
    it("has balance of -500 if withdraw 500", () => {
      account.withdraw(500);
      expect(account.getBalance()).toBe(-500);
    });
  });

  describe("printStatement", () => {
    it("checks that generateStatement has beenn called", () => {
      account.deposit(1000, "10-01-2023");
      const spy = jest.spyOn(StatementFormatter.prototype, 'generateStatement');
      account.printStatement()
      expect(spy).toHaveBeenCalled();
    });
  });

});
