
var Eth = require('web3-eth');
var Web3 = require('web3');
var Accounts = require('web3-eth-accounts');

var web3 = new Web3();

// "Eth.providers.givenProvider" will be set if in an Ethereum supported browser.
var eth = new Eth(Eth.givenProvider || 'ws://localhost:8545');
var web3 = new Web3(Web3.givenProvider || "http://localhost:8545");

//    console.log(web3);
console.log(" current provider ")
// console.log(web3.currentProvider);
// var accounts = web3.eth.accounts;

// accounts
// console.log(accounts);
console.log("console defaultaccount");
console.log(" accounts ");
web3.eth.getAccounts(console.log);
