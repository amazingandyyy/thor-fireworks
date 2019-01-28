const fs = require('fs-extra');
const path = require('path');
const web3 = require('../utils/thorifiedWeb3');
const tokenABI = fs.readFileSync(path.resolve(__dirname, './build/energy_sol_Energy.abi'), 'utf8')
console.log(tokenABI);

// const tokenABI = require('')

// const instance = (address) => new web3.eth.Contract(
//   JSON.parse(campaign.interface),
//   address
// )

// module.exports = instance;