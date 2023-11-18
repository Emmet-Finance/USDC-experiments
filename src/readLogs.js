
const extractBytes = async (web3, txHash) => {
    const transactionReceipt = await web3.eth.getTransactionReceipt(txHash);
    const eventTopic = web3.utils.keccak256('MessageSent(bytes)');
    const log = transactionReceipt.logs.find((l) => l.topics[0] === eventTopic);
    const messageBytes = web3.eth.abi.decodeParameters(['bytes'], log.data)[0];
    const messageHash = web3.utils.keccak256(messageBytes);

    console.log(`MessageBytes: ${messageBytes}`)
    console.log(`MessageHash: ${messageHash}`)

    return { messageBytes, messageHash }
}

module.exports = extractBytes;