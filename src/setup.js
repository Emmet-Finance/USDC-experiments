require("dotenv").config();
const Web3 = require('web3')

const tokenMessengerAbi = require('./abis/cctp/TokenMessenger.json');
const messageAbi = require('./abis/cctp/Message.json');
const usdcAbi = require('./abis/Usdc.json');
const messageTransmitterAbi = require('./abis/cctp/MessageTransmitter.json');

const {
    // Transaction-specific variables
    IS_TESTNET,
    AMOUNT,
    USER_SK,
    EVM_SK,
    RECIPIENT_ADDRESS,
    FROM_CHAIN,
    TO_CHAIN,

    // To be replaced with constants
    AVAX_DESTINATION_DOMAIN,
    AVAX_TESTNET_RPC,
    ETH_DESTINATION_DOMAIN,
    ETH_TESTNET_RPC,
    ETH_TOKEN_MESSENGER_CONTRACT_ADDRESS,
    USDC_ETH_CONTRACT_ADDRESS,
    ETH_MESSAGE_CONTRACT_ADDRESS,
    AVAX_MESSAGE_TRANSMITTER_CONTRACT_ADDRESS,
} = process.env;

const setup = async () => {
    // How much to transfer
    const amount = AMOUNT;

    // AVAX destination address
    const mintRecipient = RECIPIENT_ADDRESS;

    const web3 = new Web3(ETH_TESTNET_RPC);

    // Add AVAX private key used for signing transactions
    const avaxSigner = web3.eth.accounts.privateKeyToAccount(EVM_SK);
    web3.eth.accounts.wallet.add(avaxSigner);

    // Add ETH private key used for signing transactions
    const ethSigner = web3.eth.accounts.privateKeyToAccount(USER_SK);
    web3.eth.accounts.wallet.add(ethSigner);

    // initialize contracts using address and ABI
    const ethTokenMessengerContract = new web3.eth.Contract(tokenMessengerAbi, ETH_TOKEN_MESSENGER_CONTRACT_ADDRESS, { from: ethSigner.address });
    const usdcEthContract = new web3.eth.Contract(usdcAbi, USDC_ETH_CONTRACT_ADDRESS, { from: ethSigner.address });
    const ethMessageContract = new web3.eth.Contract(messageAbi, ETH_MESSAGE_CONTRACT_ADDRESS, { from: ethSigner.address });
    const avaxMessageTransmitterContract = new web3.eth.Contract(messageTransmitterAbi, AVAX_MESSAGE_TRANSMITTER_CONTRACT_ADDRESS, { from: avaxSigner.address });

    const destinationAddressInBytes32 = await ethMessageContract.methods.addressToBytes32(mintRecipient).call();

    return {
        // Transaction-specific variables
        amount,
        avaxMessageTransmitterContract,
        avaxSigner,
        destinationAddressInBytes32,
        ethMessageContract,
        ethSigner,
        ethTokenMessengerContract,
        mintRecipient,
        usdcEthContract,
        web3,
        // Constants
        AVAX_DESTINATION_DOMAIN,
        AVAX_TESTNET_RPC,
        ETH_DESTINATION_DOMAIN,
        ETH_TOKEN_MESSENGER_CONTRACT_ADDRESS,
        USDC_ETH_CONTRACT_ADDRESS,
        ETH_MESSAGE_CONTRACT_ADDRESS,
        AVAX_MESSAGE_TRANSMITTER_CONTRACT_ADDRESS,

    }
}

module.exports = {setup}