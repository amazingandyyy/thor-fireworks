require('dotenv').config();
const web3 = require('../utils/thorifiedWeb3');
const accounts = {};
const privBase = process.env.PRIVKEY_BASE;

const init = (mode='faker') => {
 for(let i=0; i<10; i++) {
  const privKey = `${privBase}${i}`;
  const account = web3.eth.accounts.privateKeyToAccount(privKey);
  web3.eth.accounts.wallet.add(account.privateKey);
  accounts[i] = account;
 }
}
init();

exports.accounts = accounts;
exports.init = init;