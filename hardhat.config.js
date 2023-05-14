require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-waffle");

// The next line is part of the sample project, you don't need it in your
// project. It imports a Hardhat task definition, that can be used for
// testing the frontend.
require("./tasks/faucet");
const { mnemonic } = require('./.secrets.json')

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
    solidity: {
        compilers: [{
            version: "0.8.17",
            settings: {
                optimizer: {
                    enabled: true,
                    runs: 1
                }
            }
        }]
    },
    networks: {
        scrollAlpha: {
            url: "https://alpha-rpc.scroll.io/l2" || "",
            chainId: 534353,
            gasPrice: "auto",
            allowUnlimitedContractSize: true,
            timeout: 1800000,
            accounts: { mnemonic: mnemonic },
        }
    },
    etherscan: {
        apiKey: {
            scrollAlpha: '66C33X1T2D9UA4ZU6G94MD66AHIRBG54D2',
        },
        customChains: [{
            network: 'scrollAlpha',
            chainId: 534353,
            urls: {
                apiURL: 'https://blockscout.scroll.io/api',
                browserURL: 'https://blockscout.scroll.io/',
            },
        }, ],
    }
};