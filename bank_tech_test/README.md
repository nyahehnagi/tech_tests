# Bank tech test

Simple API to mimic deposit, withdrawal and printing of statements for a bank account

--------------
## Tech Used

- Javascript with Node
- Jest for testing
- Prettier for linting

## Installation

---

Install node via your favourite package manager if required, see [here](https://nodejs.org/en/ "Node") for more details

Install jest if not already

```
$> npm install --save-dev jest
```

To install this code from the latest source

```
$> git clone git@github.com:nyahehnagi/tech_tests.git

```

navigate to the bank_tech_test directory

```
$> cd bank_tech_test
```

## Testing

---

To run jest tests

```
$> npx jest
```

## How to use

---

Start node from root of application

`$> node`

perform the following actions as demonstrated below

~~~~
> const Account = require("./lib/account.js")
undefined
> const StatementFormatter = require("./lib/statementformatter.js");
undefined
> myStatementFormatter = new StatementFormatter()
StatementFormatter {}
> myAccount = new Account(myStatementFormatter)
Account { statementFormatter: StatementFormatter {}, transactions: [] }
> myAccount.deposit(100)
undefined
> myAccount.deposit(200)
undefined
> myAccount.withdraw(30)
undefined
> myAccount.printStatement()
date || credit || debit || balance
30/03/2022 || || 30.00 || 270.00
30/03/2022 || 200.00 || || 300.00
30/03/2022 || 100.00 || || 100.00
undefined
~~~~

# Design Approach

- Key nouns were extracted, at the time this was Account, Statement and Transaction (this later changed to a javascript object). These would form the basis of my class design
- All code is fully test driven, with a red, green, refactor cycle. See commits to follow my process
- Build started with an Account class and was focused initially on simple elements, so in my case this was a straightforward deposit
- I built on the deposit and added withdrawal.
- I then introduced the concept of date when looking at the statement. I built the statement in small chunks, starting with the date element and hard coding the rest and then generalised debit/credit and finally added the balance
- I have taken the approach that the balance is a computed value rather than a stored value
- I have decided not to mock the moment package, this is because I want to test the date conversions are correct.

# Classes
## Account = Responsible for the client account.

It has the following public methods
- deposit(amount) - accepts an amount
- withdraw(amount) - accepts an amount 
- getBalance() - returns the current balance
- printStatment() - prints a formatted statement of all transactions
## StatementFormatter = Responsible for formatting a statement
It has the following public methods

generateStatement(transactions) = accepts a list of transactions and returns a formatted string 


# Bank tech test

Today, you'll practice doing a tech test.

For most tech tests, you'll essentially have unlimited time. This practice session is about producing the best code you can when there is a minimal time pressure.

You'll get to practice your OO design and TDD skills.

You'll work alone, and you'll also review your own code so you can practice reflecting on and improving your own work.

## Specification

### Requirements

- You should be able to interact with your code via a REPL like IRB or Node. (You don't need to implement a command line interface that takes input from STDIN.)
- Deposits, withdrawal.
- Account statement (date, amount, balance) printing.
- Data can be kept in memory (it doesn't need to be stored to a database or anything).

### Acceptance criteria

**Given** a client makes a deposit of 1000 on 10-01-2023  
**And** a deposit of 2000 on 13-01-2023  
**And** a withdrawal of 500 on 14-01-2023  
**When** she prints her bank statement  
**Then** she would see

```
date || credit || debit || balance
14/01/2023 || || 500.00 || 2500.00
13/01/2023 || 2000.00 || || 3000.00
10/01/2023 || 1000.00 || || 1000.00
```

## Self-assessment

Once you have completed the challenge and feel happy with your solution, here's a form to help you reflect on the quality of your code: https://docs.google.com/forms/d/1Q-NnqVObbGLDHxlvbUfeAC7yBCf3eCjTmz6GOqC9Aeo/edit
