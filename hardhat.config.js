require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.0",
  networks: {
    hardhat: {
      chainId:1337,
    },
  },
  paths: {
    artifacts:"./client/src/artifacts"
  }
};
