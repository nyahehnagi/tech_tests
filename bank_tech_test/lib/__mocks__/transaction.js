const transaction = jest.createMockFromModule('../lib/transaction.js')

transaction.getAmount = () => {
  console.log("Inside getAmount")
  return 999
}

export default transaction


