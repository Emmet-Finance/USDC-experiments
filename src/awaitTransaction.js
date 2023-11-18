
const waitForTransaction = async (web3, txHash) => {
    let transactionReceipt = await web3.eth.getTransactionReceipt(txHash);
    while (transactionReceipt != null && transactionReceipt.status === 'FALSE') {
        transactionReceipt = await web3.eth.getTransactionReceipt(txHash);
        await new Promise(r => setTimeout(r, 4000));
    }
    return transactionReceipt;
}

module.exports = {waitForTransaction}