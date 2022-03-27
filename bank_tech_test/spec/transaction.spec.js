const Transaction = require("../lib/transaction.js");

describe("transaction", () => {
  it("has an amount", () => {
    transaction = new Transaction(1000, "10-01-2023")
    expect(transaction.getAmount()).toBe(1000)
  })

  it("has a date", () => {
    transaction = new Transaction(1000, "10-01-2023")
    expect(transaction.getDateTransacted()).toBe("10-01-2023")
  })
})
