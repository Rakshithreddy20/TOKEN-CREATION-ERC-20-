# ERC-20 Token Creation (Sepolia Testnet)

This project creates and deploys a custom ERC-20 token using Solidity and Hardhat.

## 1) Smart Contract

Contract file: `contracts/MyToken.sol`

Key behavior:
- Uses OpenZeppelin `ERC20` and `Ownable`.
- Constructor accepts `name`, `symbol`, and `initialSupply`.
- Mints full initial supply to deployer address during deployment.
- Owner can mint additional tokens after deployment.

## 2) Token Details (Current Configuration)

- Token Standard: ERC-20
- Network Target: Ethereum Sepolia Testnet
- Solidity Version: `0.8.20`
- Decimals: `18`
- Name: `MyToken`
- Symbol: `MTK`
- Initial Supply: `1,000,000 MTK`

## 3) Setup

```bash
npm install
```

Create a `.env` file in the root directory:

```
PRIVATE_KEY
SEPOLIA_RPC_URL=https://eth-sepolia.g.alchemy.com/v2/your_alchemy_key
```

## 4) Compile

```bash
npx hardhat compile
```

Expected output:
```
Compiled 1 Solidity file with solc 0.8.20 (evm target: shanghai)
```

## 5) Deploy to Sepolia

```bash
npx hardhat run scripts/deploy.js --network sepolia
```

The script prints:
- Deployer address
- Deployed contract address
- Sepolia Etherscan link

## 6) Deployment Proof

| Field | Value |
|-------|-------|
| **Contract Address** | `0xE26C501C1117c63E005C6cf77Ce171275a8B8F04` |
| **Network** | Ethereum Sepolia Testnet |
| **Deployer Address** | `0x08eedFeD0cED19936ec820559888a3746b20aDA1` |
| **Token Name** | MyToken |
| **Token Symbol** | MTK |
| **Initial Supply** | 1,000,000 MTK |
| **Etherscan URL** | [View Contract](https://sepolia.etherscan.io/address/0xE26C501C1117c63E005C6cf77Ce171275a8B8F04) |

## 7) Project Structure

```
TOKEN CREATION/
├── contracts/
│   └── MyToken.sol        # ERC-20 smart contract
├── scripts/
│   └── deploy.js          # Deployment script
├── artifacts/             # Compiled contract artifacts (auto-generated)
├── .env                   # Private key & RPC URL (never commit this)
├── .gitignore
├── hardhat.config.js      # Hardhat configuration
├── package.json
└── README.md
```

## 8) Dependencies

| Package | Purpose |
|---------|---------|
| `hardhat` | Development framework |
| `@openzeppelin/contracts` | ERC-20 base implementation |
| `@nomicfoundation/hardhat-ethers` | Ethers.js plugin |
| `ethers` | Blockchain interaction |
| `dotenv` | Environment variable management |

## 9) Security Notes

- **Never commit your `.env` file** to version control
- Add `.env` to `.gitignore`
- Use a dedicated test wallet — do not store real funds in it
- This contract is deployed on testnet only — no real ETH is used