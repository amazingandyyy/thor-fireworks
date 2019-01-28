// ES5 style

const config = require("./config");
const sendTransaction = require('./utils/sendTransaction');
const faucet = require('./utils/faucet');

let start = 0;
let num;
setInterval(()=>{
  num = start%10;
  const from = config.accounts[num];
  const to = config.accounts[9-num];
  const amount = Math.floor(Math.random()*100).toString()+Math.floor(Math.random()*1000000000000000).toString()+'66';
  if(from.address!==to.address) {
    console.log(`${num} SENT ${Math.floor(Number(amount))/10000000000000000000} TO ${9-num}`);
    start++;
    sendTransaction(from, to, amount);
  }
}, 2000)