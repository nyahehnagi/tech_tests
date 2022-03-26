const Account = require('../lib/account.js')

describe('account', () => {

  it('has a balance of 0 on opening/instantiation', () => {
    account = new Account()
    expect(account.getBalance()).toBe(0);
  });

});
