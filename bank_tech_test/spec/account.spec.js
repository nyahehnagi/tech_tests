const Account = require("../lib/account.js");
const StatementFormatter = require("../lib/statementformatter.js");

describe("account", () => {
  let account;
  beforeEach(() => {
    account = new Account(new StatementFormatter());
  });

  describe("#getBalance", () => {
    it("has a balance of 0 on opening/instantiation", () => {
      expect(account.getBalance()).toBe(0);
    });
  });

  describe("#getTransactions", () => {
    it("has a transaction ", () => {
      mockDate = Date.parse('2022-12-25')
      Date.now = jest.fn( () => mockDate)
      
      account.deposit(1000);
      expect(account.getTransactions().length).toBe(1);
      expect(account.getTransactions()[0].amount).toBe(1000);
      expect(account.getTransactions()[0].dateTransacted).toBe(mockDate);
    });

    it("has 2 transactions ", () => {
      account.deposit(1000);
      mockDate = Date.parse('2022-12-26')
      Date.now = jest.fn( () => mockDate)

      account.withdraw(500);
      expect(account.getTransactions().length).toBe(2);
      expect(account.getTransactions()[0].amount).toBe(-500);
      expect(account.getTransactions()[0].dateTransacted).toBe(mockDate);
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

    it("throws an error if amount is not a number", () => {
      expect(() => {
        account.deposit("number");
      }).toThrow("Invalid Amount");
    });
  });

  describe("withdraw", () => {
    it("has balance of -500 if withdraw 500", () => {
      account.withdraw(500);
      expect(account.getBalance()).toBe(-500);
    });

    it("throws an error if amount is not a number", () => {
      expect(() => {
        account.withdraw("number");
      }).toThrow("Invalid Amount");
    });
  });

  describe("printStatement", () => {
    it("checks that generateStatement has been called", () => {
      account.deposit(1000);
      const spy = jest.spyOn(StatementFormatter.prototype, "generateStatement");
      account.printStatement();
      expect(spy).toHaveBeenCalled();
    });
  });
});
