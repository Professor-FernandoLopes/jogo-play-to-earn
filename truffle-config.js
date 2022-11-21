require('dotenv').config();
const HDWalletProvider = require('@truffle/hdwallet-provider');

module.exports = {
  

  networks: {
    
    ethTestnet: {
    

     provider: function() {

      return new HDWalletProvider(
     process.env.mnemonic, 
      'https://speedy-nodes-nyc.moralis.io/e7e701dd97678748cf3e2f13/eth/rinkeby'
      )

      },
      network_id: 4
 
     },
   
    },

  

  
  contracts_directory: './contracts/',
  contracts_build_directory: './frontend/abis',
  // Configure your compilers
  compilers: {
    solc: {
      version: "0.8.0",    // Fetch exact version from solc-bin (default: truffle's version)
      
    }
  },

  
};
