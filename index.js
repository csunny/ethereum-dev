var Web3 = require("web3");
var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545", 0, "magic", "123456"));

var hash = web3.utils.sha3("magic");
console.log(hash);

