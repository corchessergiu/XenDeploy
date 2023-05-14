## Quick start
The first things you need to do are cloning this repository and installing its
dependencies:

```sh
git clone git@github.com:corchessergiu/XenDeploy.git
cd XenDeploy
npm install
```

### Prerequisites
Add `.secrets.json` file in root directory and put your secret phrase as a json format. For example:
```
{
    "mnemonic":"crazy crazy crazy crazy crazy crazy crazy crazy crazy crazy crazy buzz"
}
```

Then, on a new terminal, go to the repository's root folder and run this to
deploy your contract:

```sh
npx hardhat run scripts/deploy.js --network scrollAlpha
```

# XEN token address 

| Contract name            | scrollAlpha |
| ------------------------ | ----------- | 
| XENCrypto                | 0xBa9FEa35552c6C1b2EAFAb0597215b17BEa3a39C | 
