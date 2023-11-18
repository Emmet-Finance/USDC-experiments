
const { waitForTransaction } = require('./awaitTransaction.js');

const burnUSDC = async (
    ethTokenMessengerContract,
    amount,
    AVAX_DESTINATION_DOMAIN,
    destinationAddressInBytes32,
    USDC_ETH_CONTRACT_ADDRESS,
    web3
) => {
    console.log("Step 2: Burn");
    const burnTxGas = await ethTokenMessengerContract.methods.depositForBurn(
        amount,
        AVAX_DESTINATION_DOMAIN,
        destinationAddressInBytes32,
        USDC_ETH_CONTRACT_ADDRESS
    ).estimateGas();
    console.log("burnTxGas", burnTxGas);

    const burnTx = await ethTokenMessengerContract.methods.depositForBurn(
        amount,
        AVAX_DESTINATION_DOMAIN,
        destinationAddressInBytes32,
        USDC_ETH_CONTRACT_ADDRESS
    ).send({ gas: burnTxGas });

    const burnTxReceipt = await waitForTransaction(web3, burnTx.transactionHash);
    console.log('BurnTxReceipt: ', burnTxReceipt);
    
    return burnTx.transactionHash;
}

module.exports = burnUSDC;