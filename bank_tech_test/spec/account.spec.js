const Account = require("../lib/account.js");

describe("account", () => {
  let account;
  beforeEach(() => {
    account = new Account();
  });

  describe("#getBalance", () => {
    it("has a balance of 0 on opening/instantiation", () => {
      expect(account.getBalance()).toBe(0);
    });

    it("has balance of 1000 after depositing 1000", () => {
      account.deposit(1000);
      expect(account.getBalance()).toBe(1000);
    });

    it("has balance of 3000 after depositing 1000 then 2000", () => {
      account.deposit(1000);
      account.deposit(2000);
      expect(account.getBalance()).toBe(3000);
    });

    it("has balance of -500 if withdraw 500", () => {
      account.withdraw(500);
      expect(account.getBalance()).toBe(-500);
    });
  });

  describe("#deposit", () => {
    it("returns a balance after depositing 1000", () => {
      expect(account.deposit(1000)).toBe(1000);
    });
  });

  describe("withdraw", () => {
    it("returns a balance after withdrawing 500", () => {
      expect(account.withdraw(500)).toBe(-500);
    });
  });

  describe('#statement', () => {
    it('show the statement for a single deposit', () => {
      account.deposit(1000, '10-01-2023')
      expect(account.statement()).toBe("10/01/2023 || 1000.00 || || 1000.00")
    })

  })
});
