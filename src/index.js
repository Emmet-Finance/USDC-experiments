
const { setup } = require('./setup.js');
const approve = require('./approve.js');
const burnUSDC = require('./burn.js');
const extractBytes = require('./readLogs.js');
const getSignature = require('./getSignature.js');
const claim = require('./claim.js');

const main = async () => {

    const {
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
        ETH_TOKEN_MESSENGER_CONTRACT_ADDRESS,
        USDC_ETH_CONTRACT_ADDRESS,
        ETH_MESSAGE_CONTRACT_ADDRESS,
        AVAX_MESSAGE_TRANSMITTER_CONTRACT_ADDRESS,

    } = await setup();

    // STEP 1: Approve messenger contract to withdraw from our active eth address
    await approve(amount, usdcEthContract, web3, ETH_TOKEN_MESSENGER_CONTRACT_ADDRESS);

    // 2. STEP 2: Burn USDC, Calls `depositForBurn` on TokenMessengerContract
    const txHash = await burnUSDC(
        ethTokenMessengerContract,
        amount,
        AVAX_DESTINATION_DOMAIN,
        destinationAddressInBytes32,
        USDC_ETH_CONTRACT_ADDRESS,
        web3);

    // STEP 3: Retrieve message bytes from log `MessageSent`
    const {messageBytes, messageHash} = await extractBytes(web3, txHash);
    
    // STEP 4: Fetch attestation signature
    const attestationSignature = await getSignature(messageHash);

    // 5. Calls `receiveMessage` on `TokenMessengerContract` to receive USDC on AVAX
    await claim(web3, AVAX_TESTNET_RPC, avaxMessageTransmitterContract, messageBytes, attestationSignature);
}

main();