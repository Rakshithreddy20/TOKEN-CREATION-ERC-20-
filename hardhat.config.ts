import "@nomicfoundation/hardhat-ethers";
import { config as dotenvConfig } from "dotenv";
dotenvConfig();

const config = {
  solidity: "0.8.20",
  networks: {
    sepolia: {
      type: "http",
      url: process.env.SEPOLIA_RPC_URL,
      accounts: [process.env.PRIVATE_KEY],
    },
  },
};

export default config;