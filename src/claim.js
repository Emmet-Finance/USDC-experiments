
const { waitForTransaction } = require('./awaitTransaction.js');

const claim = async (web3, RPC, contract, messageBytes, attestationSignature) => {
    console.log("Step 5: Claim");
    web3.setProvider(RPC); // Connect web3 to AVAX testnet
    const receiveTxGas = await contract.methods.receiveMessage(messageBytes, attestationSignature).estimateGas();
    const receiveTx = await contract.methods.receiveMessage(messageBytes, attestationSignature).send({gas: receiveTxGas});
    const receiveTxReceipt = await waitForTransaction(web3, receiveTx.transactionHash);
    console.log('ReceiveTxReceipt: ', receiveTxReceipt)
}

module.exports = claim;