import { ethers } from "ethers";
import { readFileSync } from "fs";
import { resolve } from "path";
import dotenv from "dotenv";
dotenv.config();

async function main() {
  // Connect to Sepolia
  const provider = new ethers.JsonRpcProvider(process.env.SEPOLIA_RPC_URL);
  const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider);
  
  console.log("Deploying with account:", wallet.address);

  // Load compiled contract
  const artifactPath = resolve("artifacts/contracts/MyToken.sol/MyToken.json");
  const artifact = JSON.parse(readFileSync(artifactPath, "utf8"));

  // Deploy
  const factory = new ethers.ContractFactory(artifact.abi, artifact.bytecode, wallet);
  const token = await factory.deploy("MyToken", "MTK", 1000000);
  
  await token.waitForDeployment();
  console.log("✅ Token deployed to:", await token.getAddress());
}

main().catch(console.error);