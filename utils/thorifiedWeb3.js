const thorify = require("thorify").thorify;

const Web3 = require("web3");

const thorifiedWeb3 = thorify(new Web3(), "http://localhost:8669");

module.exports = thorifiedWeb3