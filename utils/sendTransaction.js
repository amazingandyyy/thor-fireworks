const web3 = require("./thorifiedWeb3");

const sendTransaction = (from, to, amount) => {
  web3.eth.accounts.wallet.add(from.privateKey);
  web3.eth.sendTransaction({
    from: from.address,
    to: to.address,
    value: amount
  }, (err, txId) => {
    if (err) return console.log(err.message);
    console.log(`${from.address} SENT ${amount} TO ${to.address}`);
    console.log(`CHECK TX: https://testnet.veforge.com/transactions/${txId}`);
  })
}
module.exports = sendTransaction;