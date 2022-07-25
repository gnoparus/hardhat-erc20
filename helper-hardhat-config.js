const { network, ethers } = require("hardhat")

const networkConfig = {
    default: {
        name: "hardhat",
        keepersUpdateInterval: "30",
    },
    4: {
        name: "rinkeby",
    },
    31337: {
        name: "localhost",
    },
}

const developmentChains = ["hardhat", "localhost"]

module.exports = { networkConfig, developmentChains }
