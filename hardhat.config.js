require('@nomiclabs/hardhat-ethers')
const fs = require('fs')
const privateKey = fs.readFileSync('.secret').toString().trim()

module.exports = {
  defaultNetwork: 'localhost',
  networks: {
    hardhat: {},
    matic: {
      url: 'https://rpc-mumbai.maticvigil.com',
      accounts: [privateKey],
    },
    localhost: {
      url: 'http://127.0.0.1:8545/',
      accounts: [privateKey],
    },
  },
  solidity: {
    version: '0.8.6',
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
}
