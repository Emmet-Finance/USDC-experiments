const { waitForTransaction } = require('./awaitTransaction.js');

const approve = async (amount, contract, web3, TOKEN_MESSENGER_CONTRACT_ADDRESS) => {
    console.log("Step 1: Approve");
    const approveTxGas = await contract.methods.approve(TOKEN_MESSENGER_CONTRACT_ADDRESS, amount).estimateGas();
    console.log("approveTxGas:", approveTxGas);
    const approveTx = await contract.methods.approve(TOKEN_MESSENGER_CONTRACT_ADDRESS, amount).send({gas: approveTxGas})
    const approveTxReceipt = await waitForTransaction(web3, approveTx.transactionHash);
    console.log('ApproveTxReceipt: ', approveTxReceipt);
}

module.exports = approve;