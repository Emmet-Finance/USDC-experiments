import { Bytes, defaultAbiCoder, id, keccak256 } from 'ethers/lib/utils';

// From @ethersproject/abstract-provider
export interface Log {
    blockNumber: number;
    blockHash: string;
    transactionIndex: number;

    removed: boolean;

    address: string;
    data: string;

    topics: Array<string>;

    transactionHash: string;
    logIndex: number;
}

/**
 * Returns message bytes from decoding the event logs
 * @param logs the event logs of a transaction
 * @param topic the topic to be filter from the log
 * @returns message bytes
 */
export function getMessageBytesFromEventLogs(
    logs: Log[],
    topic: string
): Bytes {
    const eventTopic = id(topic)
    const log = logs.filter((l) => l.topics[0] === eventTopic)[0]
    return defaultAbiCoder.decode(['bytes'], log.data)[0] as Bytes
}

/**
 * Converts the message bytes message hash from
 * @param message the message bytes
 * @returns sha3 hash of the message
 */
export function getMessageHashFromBytes(message: Bytes): string {
    return keccak256(message)
}