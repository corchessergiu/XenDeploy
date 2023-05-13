require("@nomicfoundation/hardhat-toolbox");

// The next line is part of the sample project, you don't need it in your
// project. It imports a Hardhat task definition, that can be used for
// testing the frontend.
require("./tasks/faucet");
const { mnemonic } = require('./.secrets.json')

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
    solidity: "0.8.17",
    networks: {
        scrollAlpha: {
            url: "https://alpha-rpc.scroll.io/12" || "",
            chainId: 137,
            gasPrice: "auto",
            allowUnlimitedContractSize: true,
            timeout: 1800000,
            accounts: { mnemonic: mnemonic },
        }
    }
};