// This is a script for deploying your contracts. You can adapt it to deploy
// yours, or create new ones.

const path = require("path");

async function main() {
    // This is just a convenience check
    if (network.name === "hardhat") {
        console.warn(
            "You are trying to deploy a contract to the Hardhat Network, which" +
            "gets automatically created and destroyed every time. Use the Hardhat" +
            " option '--network localhost'"
        );
    }

    // ethers is available in the global scope
    const [deployer] = await ethers.getSigners();
    console.log(
        "Deploying the contracts with the account:",
        await deployer.getAddress()
    );

    console.log("Account balance:", (await deployer.getBalance()).toString());

    const lib = await ethers.getContractFactory("Math");
    const library = await lib.deploy();

    const xenContract = await ethers.getContractFactory("XENCrypto", {
        libraries: {
            Math: library.address
        }
    });

    XENContract = await xenContract.deploy();
    await XENContract.deployed();


    console.log("Token address:", XENContract.address);

    // We also save the contract's artifacts and address in the frontend directory
    saveFrontendFiles(XENContract);
}

function saveFrontendFiles(token) {
    const fs = require("fs");
    const contractsDir = path.join(__dirname, "..", "frontend", "src", "contracts");

    if (!fs.existsSync(contractsDir)) {
        fs.mkdirSync(contractsDir);
    }

    fs.writeFileSync(
        path.join(contractsDir, "contract-address.json"),
        JSON.stringify({ Token: XENContract.address }, undefined, 2)
    );

    const XENContractArtifact = artifacts.readArtifactSync("XENContract");

    fs.writeFileSync(
        path.join(contractsDir, "XENContract.json"),
        JSON.stringify(XENContractArtifact, null, 2)
    );
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });