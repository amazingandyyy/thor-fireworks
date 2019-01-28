// ES5 style

const config = require("./config");
const sendTransaction = require('./utils/sendTransaction');
config.init();
setInterval(()=>{
  sendTransaction(config.accounts['f'], config.accounts[Math.floor(Math.random()*9+1)], '99999999999999')
}, 2000)