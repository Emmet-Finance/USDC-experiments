# USDC Experiments

## Token Faucet

https://usdcfaucet.com/

## Initializing the project

1. Initializing Yarn

```bash
touch yarn.lock
yarn init
```

2. Installing hardhat

```bash
yarn add --dev hardhat
npx hardhat init
```

Select from the options `Create a TypeScript project` & answer `yes` twice.

## USDC Testnet addresses

### Owner

Roles:
- Contract creation
- Update Rescuer
- Update Pauser
- Add local token

|Chain|EOE Address|Contract Name|
|:-:|:-|:-|
|Goerli|[0x1e1208E401B34eD380d0E65d4c94981E065B099E](https://goerli.etherscan.io/address/0x1e1208E401B34eD380d0E65d4c94981E065B099E)| Token Minter|

### Rescuer

|Chain|EOE Address|Contract|
|:-:|:-|:-|
|Goerli|[0x7bAe5a2E13eA068f1392ad5E083d93109F60F188](https://goerli.etherscan.io/address/0x7bAe5a2E13eA068f1392ad5E083d93109F60F188)| |
|Goerli|[0x73eA2E1632545f0c168d0F86773aF179a5039771](https://goerli.etherscan.io/address/0x73eA2E1632545f0c168d0F86773aF179a5039771)| Local Minter|

### Token Controller
|EOE Address|Chains|
|:-:|:-|
|0xBC22765C924F22Bd5FCF5C7173B6B891c71dE002|Goerli, BSC, Optimism, Arbiscan, Base, Sepolia|

### Remote domains

|uint32|Chain Name|
|:-:|:-|
|0|Goerli|
|1|Avalanche|
|2|Optimism|
|3|Arbitrum|
|4|?|
|5|? Non-EVM|
|6|Base|
|7|Polygon|

## Local Testnet Token Contracts (USDC)

```ts
export const DEFAULT_DECIMALS = 6 // USDC
```

<!-- https://www.circle.com/en/multichain-usdc -->

|Chain|Address|
|:-:|:-:|
|Goerli|[0x07865c6E87B9F70255377e024ace6630C1Eaa37F](https://goerli.etherscan.io/address/0x07865c6E87B9F70255377e024ace6630C1Eaa37F)|
|Avalanche|[0x5425890298aed601595a70AB815c96711a31Bc65](https://testnet.snowtrace.io/token/0x5425890298aed601595a70ab815c96711a31bc65)|
|Arbitrum|[0xfd064a18f3bf249cf1f87fc203e90d8f650f2d63](https://goerli.arbiscan.io/token/0xfd064a18f3bf249cf1f87fc203e90d8f650f2d63)|
|Base|[0xF175520C52418dfE19C8098071a252da48Cd1C19](https://goerli.basescan.org/token/0xf175520c52418dfe19c8098071a252da48cd1c19)|
|Optimism|[0xe05606174bac4A6364B31bd0eCA4bf4dD368f8C6](https://goerli-optimism.etherscan.io/token/0xe05606174bac4a6364b31bd0eca4bf4dd368f8c6)|
|Polygon|[0x9999f7Fea5938fD3b1E26A12c3f2fb024e194f97](https://mumbai.polygonscan.com/token/0x9999f7fea5938fd3b1e26a12c3f2fb024e194f97)|
|Stellar|[USDC-GBBD47IF6LWK7P7MDEVSCWR7DPUWV3NY3DTQEVFL4NAT4AQH3ZLLFLA5](https://stellar.expert/explorer/testnet/asset/USDC-GBBD47IF6LWK7P7MDEVSCWR7DPUWV3NY3DTQEVFL4NAT4AQH3ZLLFLA5)|
|TRON|[TFGBSrddCjLJAwuryZ9DUxtEmKv13BPjnh](https://shasta.tronscan.org/#/contract/TFGBSrddCjLJAwuryZ9DUxtEmKv13BPjnh)|


## Local Message Transmitter

|Chain|Address|
|:-:|:-|
|Goerli|[0x26413e8157cd32011e726065a5462e97dd4d03d9]()|
|Avalanche|[0xa9fb1b3009dcb79e2fe346c16a604b8fa8ae0a79]()|
|Arbitrum|[0x109bc137cb64eab7c0b1dddd1edf341467dc2d35]()|

## Local Minter

|Chain|Address|
|:-:|:-|
|Goerli|[0xcA6B4c00831Ffb77afE22E734A6101b268B7fcBE](https://goerli.etherscan.io/address/0xcA6B4c00831Ffb77afE22E734A6101b268B7fcBE)|


## Local Token Messenger

|#|Chain|Address|
|:-:|:-:|:-|
|0|Goerli|[0xD0C3DA58F55358142B8D3E06C1C30C5C6114EFE8]()|
|1|Avalanche|[0xeb08f243e5d3fcff26a9e38ae5520a669f4019d0]()|
|2|Optimism|[0x23A04D5935ED8BC8E3EB78DB3541F0ABFB001C6E](https://goerli-optimism.etherscan.io/address/0x23a04d5935ed8bc8e3eb78db3541f0abfb001c6e)|
|3|Arbitrum|[0x12dcfd3fe2e9eac2859fd1ed86d2ab8c5a2f9352]()|
|4|?|[0x57D4EAF1091577A6B7D121202AFBD2808134F117]()|
|5|?|[A65FC943419A5AD590042FD67C9791FD015ACF53A54CC823EDB8FF81B9ED722E]()|
|6|Base|[0x877B8E8C9E2383077809787ED6F279CE01CB4CC8](https://goerli.basescan.org/address/0x877b8e8c9e2383077809787ed6f279ce01cb4cc8)|
|7|Polygon|[0x9F3B8679C73C2FEF8B59B4F3444D4E156FB70AA5]()|

P.S.: 4 - Not Testnet Linea, Not BSC