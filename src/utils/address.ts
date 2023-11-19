import { 
    CHAIN_IDS_TO_MESSAGE_TRANSMITTER_ADDRESSES, 
    CHAIN_IDS_TO_TOKEN_MESSENGER_ADDRESSES, 
    CHAIN_IDS_TO_USDC_ADDRESSES, 
    SupportedChainId 
} from '../constants';

/**
 * Returns zerro-padded bytes32 address representaiton
 * @param address the original 20 byte address
 * @returns a bytes32 zero-padded representaiton of address
 */
export function addressToBytes32(address: string) {
    // "0x" + 24 zeros + Rest of the address string with leading "0x" trimmed
    return (
        address.slice(0, 2) +
        '000000000000000000000000' +
        address.slice(2, address.length)
    )
}

/**
 * Returns a shortened address
 * @param address the original 20 byte address
 * @returns 0x1234...abcd
 */
export function getAddressAbbreviation(address: string): string {
    return address.slice(0, 6) + '...' + address.slice(-4)
}

/**
 * Selects the address of the Message Trasmitter by the chainId
 * @param chainId the selected chainId (hex string)
 * @returns the address of the Message Trasmitter
 */
export const getMessageTransmitterContract = (
    chainId: SupportedChainId
): string => {
    if(chainId == null) return '';
    return CHAIN_IDS_TO_MESSAGE_TRANSMITTER_ADDRESSES[chainId];
}

/**
 * Selects the address of the Token Messenger by the chainId
 * @param chainId the selected chainId (hex string)
 * @returns the address of the Token Messenger
 */
export const getTokenMessengerContract = (
    chainId: SupportedChainId
): string => {
    if(chainId == null) return '';
    return CHAIN_IDS_TO_TOKEN_MESSENGER_ADDRESSES[chainId];
}

/**
 * Selects the address of the USDC contract by the chainId
 * @param chainId the selected chainId (hex string)
 * @returns the address of the USDC contract
 */
export const getUSDCContract = (chainId: SupportedChainId): string => {
    if(chainId == null) return '';
    return CHAIN_IDS_TO_USDC_ADDRESSES[chainId];
}