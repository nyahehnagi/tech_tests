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

  describe('#statement', () => {
    it('show the statement for a single deposit', () => {
      account.deposit(1000, '10-01-2023')
      expect(account.statement()).toBe("10/01/2023 || 1000.00 || || 1000.00")
    })

    it('show the statement for 2 deposits', () => {
      account.deposit(1000, '10-01-2023')
      account.deposit(2000, '13-01-2023')
      expect(account.statement()).toBe("13/01/2023 || 2000.00 || || 3000.00\r\n10/01/2023 || 1000.00 || || 1000.00")
    })

    
    it('show the statement for 2 deposits and withdrawal', () => {
      account.deposit(1000, '10-01-2023')
      account.deposit(2000, '13-01-2023')
      account.withdraw(500, '14-01-2023')
      expect(account.statement()).toBe("14/01/2023 || || 500.00 || 2500.00\r\n13/01/2023 || 2000.00 || || 3000.00\r\n10/01/2023 || 1000.00 || || 1000.00")
    })

  })
});
