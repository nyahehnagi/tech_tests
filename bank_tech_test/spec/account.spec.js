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
      account.deposit(1000, '25-12-2022');
      expect(account.getTransactions().length).toBe(1);
      expect(account.getTransactions()[0].amount).toBe(1000);
      expect(account.getTransactions()[0].dateTransacted).toBe('25-12-2022');
    });

    it("has 2 transactions ", () => {
      account.deposit(1000, '25-12-2022');
      account.withdraw(500, '26-12-2022');
      expect(account.getTransactions().length).toBe(2);
      expect(account.getTransactions()[0].amount).toBe(-500);
      expect(account.getTransactions()[0].dateTransacted).toBe('26-12-2022');
    });

  });

  describe("#deposit", () => {
    it("has balance of 1000 after depositing 1000", () => {
      account.deposit(1000, '10-01-2023');
      expect(account.getBalance()).toBe(1000);
    });

    it("has balance of 3000 after depositing 1000 then 2000", () => {
      account.deposit(1000, '10-01-2023');
      account.deposit(2000, '11-01-2023');
      expect(account.getBalance()).toBe(3000);
    });

    it("throws an error if date not in expected format", () =>{
      expect(() => {
        account.deposit(1000, '10/01/2023')
      }).toThrow('Invalid Date');
    })

  });

  describe("withdraw", () => {
    it("has balance of -500 if withdraw 500", () => {
      account.withdraw(500, '10-01-2023');
      expect(account.getBalance()).toBe(-500);
    });

    it("throws an error if date not in expected format", () =>{
      expect(() => {
        account.withdraw(500, '10/01/2023');
      }).toThrow('Invalid Date');
    })
  });

  describe("printStatement", () => {
    it("checks that generateStatement has been called", () => {
      account.deposit(1000, "10-01-2023");
      const spy = jest.spyOn(StatementFormatter.prototype, "generateStatement");
      account.printStatement();
      expect(spy).toHaveBeenCalled();
    });
  });
});
