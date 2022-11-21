const TokenEth = artifacts.require('./GameToken.sol')

module.exports = async function(deployer, network, addresses){

    if(network==='ethTestnet') {

        await deployer.deploy(TokenEth,"DeFiGameToken",'DGT');
        const tokenEth = await TokenEth.deployed();
        await tokenEth.mint(addresses[0], '100000000000000000000' )

    }
}

