const Account = require("../lib/account.js");
const StatementFormatter = require("../lib/statementformatter.js");

describe("StatementFormatter", () => {
  describe("#generateStatement", () => {
    let statementFormatter;

    beforeEach(() => {
      statementFormatter = new StatementFormatter();
    });

    it("show the statement for a single deposit", () => {
      mockDate = Date.parse('2023-01-10')
      
      Account.getTransactions = jest
        .fn(Account.getTransactions)
        .mockImplementation(() => [
          { amount: 1000, dateTransacted: mockDate },
        ]);

      Account.getBalance = jest
        .fn(Account.getBalance)
        .mockImplementation(() => 1000);

      expect(statementFormatter.generateStatement(Account)).toBe(
        "date || credit || debit || balance\r\n10/01/2023 || 1000.00 || || 1000.00"
      );
    });

    it("show the statement for 2 deposits", () => {
      mockDateOne = Date.parse('2023-01-13')
      mockDateTwo = Date.parse('2023-01-10')

      Account.getTransactions = jest
        .fn(Account.getTransactions)
        .mockImplementation(() => [
          { amount: 2000, dateTransacted: mockDateOne },
          { amount: 1000, dateTransacted: mockDateTwo },
        ]);

      Account.getBalance = jest
        .fn(Account.getBalance)
        .mockReturnValueOnce(3000)
        .mockReturnValueOnce(1000);
      expect(statementFormatter.generateStatement(Account)).toBe(
        "date || credit || debit || balance" +
          "\r\n" +
          "13/01/2023 || 2000.00 || || 3000.00" +
          "\r\n" +
          "10/01/2023 || 1000.00 || || 1000.00"
      );
    });

    it("show the statement for 2 deposits and withdrawal", () => {
      mockDateOne = Date.parse('2023-01-14')
      mockDateTwo = Date.parse('2023-01-13')
      mockDateThree = Date.parse('2023-01-10')

      Account.getTransactions = jest
        .fn(Account.getTransactions)
        .mockImplementation(() => [
          { amount: -500, dateTransacted: mockDateOne },
          { amount: 2000, dateTransacted: mockDateTwo },
          { amount: 1000, dateTransacted: mockDateThree },
        ]);

      Account.getBalance = jest
        .fn(Account.getBalance)
        .mockReturnValueOnce(2500)
        .mockReturnValueOnce(3000)
        .mockReturnValueOnce(1000);

      expect(statementFormatter.generateStatement(Account)).toBe(
        "date || credit || debit || balance" +
          "\r\n" +
          "14/01/2023 || || 500.00 || 2500.00" +
          "\r\n" +
          "13/01/2023 || 2000.00 || || 3000.00" +
          "\r\n" +
          "10/01/2023 || 1000.00 || || 1000.00"
      );
    });
  });
});
