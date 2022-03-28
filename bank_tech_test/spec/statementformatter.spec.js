const Account = require("../lib/account.js");
const StatementFormatter = require("../lib/statementformatter.js");

describe("StatementFormatter", () => {
  describe("#generateStatement", () => {
    let statementFormatter;

    beforeEach(() => {
      statementFormatter = new StatementFormatter();
    });

    it("show the statement for a single deposit", () => {
      Account.getTransactions = jest
        .fn(Account.getTransactions)
        .mockImplementation(() => [
          { amount: 1000, dateTransacted: "10-01-2023" },
        ]);

      Account.getBalance = jest
        .fn(Account.getBalance)
        .mockImplementation(() => 1000);

      expect(statementFormatter.generateStatement(Account)).toBe(
        "date || credit || debit || balance\r\n10/01/2023 || 1000.00 || || 1000.00"
      );
    });

    it("show the statement for 2 deposits", () => {
      Account.getTransactions = jest
        .fn(Account.getTransactions)
        .mockImplementation(() => [
          { amount: 2000, dateTransacted: "13-01-2023" },
          { amount: 1000, dateTransacted: "10-01-2023" },
        ]);

      Account.getBalance = jest
        .fn(Account.getBalance)
        .mockReturnValueOnce(3000)
        .mockReturnValueOnce(1000);
      expect(statementFormatter.generateStatement(Account)).toBe(
        "date || credit || debit || balance" +
          "\r\n" +
          "13/01/2023 || 2000.00 || || 3000.00\r\n10/01/2023 || 1000.00 || || 1000.00"
      );
    });

    it("show the statement for 2 deposits and withdrawal", () => {
      account = new Account();
      account.deposit(1000, "10-01-2023");
      account.deposit(2000, "13-01-2023");
      account.withdraw(500, "14-01-2023");
      expect(statementFormatter.generateStatement(account)).toBe(
        "date || credit || debit || balance\r\n14/01/2023 || || 500.00 || 2500.00\r\n13/01/2023 || 2000.00 || || 3000.00\r\n10/01/2023 || 1000.00 || || 1000.00"
      );
    });
  });
});
