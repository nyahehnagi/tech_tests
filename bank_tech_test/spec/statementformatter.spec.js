const Account = require("../lib/account.js");
const Transaction = require("../lib/transaction.js");
const StatementFormatter = require("../lib/statementformatter.js");

describe("StatementFormatter", () => {

  describe("#generateStatement", () => {

    let account;
    let statementFormatter;
    beforeEach(() => {
      account = new Account(Transaction, StatementFormatter);
      statementFormatter = new StatementFormatter(account)
    });

    it("show the statement for a single deposit", () => {
      account.deposit(1000, "10-01-2023");

      expect(statementFormatter.generateStatement()).toBe(
        "date || credit || debit || balance\r\n10/01/2023 || 1000.00 || || 1000.00"
      );
    });

    it("show the statement for 2 deposits", () => {
      account.deposit(1000, "10-01-2023");
      account.deposit(2000, "13-01-2023");
      expect(statementFormatter.generateStatement()).toBe(
        "date || credit || debit || balance\r\n13/01/2023 || 2000.00 || || 3000.00\r\n10/01/2023 || 1000.00 || || 1000.00"
      );
    });

    it("show the statement for 2 deposits and withdrawal", () => {
      account.deposit(1000, "10-01-2023");
      account.deposit(2000, "13-01-2023");
      account.withdraw(500, "14-01-2023");
      expect(statementFormatter.generateStatement()).toBe(
        "date || credit || debit || balance\r\n14/01/2023 || || 500.00 || 2500.00\r\n13/01/2023 || 2000.00 || || 3000.00\r\n10/01/2023 || 1000.00 || || 1000.00"
      );
    });
  });
});