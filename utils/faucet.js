const request = require("axios");
const web3 = require("./thorifiedWeb3");

const faucet = (address) => {
 request.post("https://faucet.outofgas.io/requests", { "to": address })
 .then(res=>{
   console.log(res.data);
   web3.eth.getBalance(address).then((a)=>console.log(a));
 })
 .catch(err=>{
   console.log("err", err.message);
 })
}

module.exports = faucet;
