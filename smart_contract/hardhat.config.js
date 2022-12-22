// https://eth-goerli.g.alchemy.com/v2/vvchLe_jgo6MtAuatTyj8y60XGds8OLx

require('@nomiclabs/hardhat-waffle')

module.exports = {
  solidity: '0.8.0',
  networks: {
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/vvchLe_jgo6MtAuatTyj8y60XGds8OLx',
      accounts: ['8c3917aadd4d47d58d854a2f15d18de6618af177efc0d2782e36b69dbc774710']
    }
  }
}