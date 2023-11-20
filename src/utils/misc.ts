import { IrisApiUrl } from '../constants';

/**
 * Returns the gas value plus a margin for unexpected or variable gas costs
 * @param value the estimated fee to be paid by the user
 * @returns value + 20%
 */
export function calculateGasMargin(value: bigint): bigint {
    return value * BigInt(120) / BigInt(100);
}

/**
 * Return a hexadecimal representation of a number
 * @param num a decimal number
 * @returns hex representation of the num
 */
export const numToHex = (num: number): string => {
    const val = Number(num)
    return '0x' + val.toString(16)
}

/**
 * Copies the value to the clipboard
 * @param value the value to be copied to clipboard
 */
export function copyToClipboard(value: string) {
    /* Copy the text inside the text field */
    void navigator.clipboard.writeText(value)
}

/**
 * Provides the testnet or mainnet base URL
 * @param isTestnet boolean flag whether we're on testnet
 * @returns testnet or mainnet base URL
 */
export const geBaseURL = (isTestnet: boolean = false): string => {
    return isTestnet
        ? `${IrisApiUrl.testnet}/attestations`
        : `${IrisApiUrl.mainnet}/attestations`;
}