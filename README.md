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
|2||
|3|Arbitrum|
|4||
|5|NEAR ?|
|6||
|7||

## Local Token Contracts (USDC)

```ts
export const DEFAULT_DECIMALS = 6 // USDC
```

|Chain|Address|
|:-:|:-:|
|Goerli|[0x07865c6E87B9F70255377e024ace6630C1Eaa37F](https://goerli.etherscan.io/address/0x07865c6E87B9F70255377e024ace6630C1Eaa37F)|
|Avalanche|[0x5425890298aed601595a70AB815c96711a31Bc65]()|
|Arbitrum|[0xfd064a18f3bf249cf1f87fc203e90d8f650f2d63]()|

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

|Chain|Address|
|:-:|:-|
|Goerli|[0xd0c3da58f55358142b8d3e06c1c30c5c6114efe8]()|
|Avalanche|[0xeb08f243e5d3fcff26a9e38ae5520a669f4019d0]()|
|Arbitrum|[0x12dcfd3fe2e9eac2859fd1ed86d2ab8c5a2f9352]()|