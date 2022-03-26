const Account = require('../lib/account.js')

describe('account', () => {

  it('has a balance of 0 on opening/instantiation', () => {
    account = new Account()
    expect(account.getBalance()).toBe(0);
  });

  describe('#deposit', ()  => {
    it('has balance of 1000 after depositing 1000', () => {
      account = new Account()
      account.deposit(1000)
      expect(account.getBalance()).toBe(1000);
    });

    it('has balance of 1000 after depositing 1000', () => {
      account = new Account()
      account.deposit(1000)
      expect(account.getBalance()).toBe(1000);
    });

    it('has balance of 3000 after depositing 1000 then 2000', () => {
      account = new Account()
      account.deposit(1000)
      account.deposit(2000)
      expect(account.getBalance()).toBe(3000);
    });
  })

});
