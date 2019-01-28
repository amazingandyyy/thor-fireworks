const web3 = require("./thorifiedWeb3");

const getPublicKey = (priv) => {
 const account = web3.eth.accounts.privateKeyToAccount(priv);
 return account.address;
}
module.exports = getPublicKey;