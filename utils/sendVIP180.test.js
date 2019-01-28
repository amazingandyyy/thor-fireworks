const sendVIP180 = require('./sendVIP180');
const web3 = require('./thorifiedWeb3');
const config = require("../config");

it('can send VIP180', (done) => {
 const from = config.accounts[2] // 15868 vtho
 const to = config.accounts[0] // 0 vtho
 web3.eth.getAccounts().then(a=>console.log(a));
 sendVIP180(from, to);
 done();
})