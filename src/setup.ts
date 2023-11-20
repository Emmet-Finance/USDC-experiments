// External
import dotenv from 'dotenv';
import Web3 from 'web3';
// Internal
import {DestinationChain, OriginalChain, TXParams} from './types';
import {
    CHAIN_ID_TO_DESTINATION_DOMAIN,
    CHAIN_IDS_TO_MESSAGE_TRANSMITTER_ADDRESSES,
    CHAIN_IDS_TO_TOKEN_MESSENGER_ADDRESSES,
    CHAIN_IDS_TO_USDC_ADDRESSES,
    SupportedChainId,
} from './constants';
// ABIs
const tokenMessengerAbi = require('./abis/cctp/TokenMessenger.json');
const messageAbi = require('./abis/cctp/Message.json');
const usdcAbi = require('./abis/Usdc.json');
const messageTransmitterAbi = require('./abis/cctp/MessageTransmitter.json');
dotenv.config();

const {
    // Transaction-specific variables
    AMOUNT,
    FROM_CHAIN_ID,
    IS_TESTNET,
    RECIPIENT_ADDRESS,
    TO_CHAIN_ID,
    // Secrets
    USER_SK,
    EVM_SK,
} = process.env;

export const setup = (): {
    txParams: TXParams, 
    fromChain: OriginalChain, 
    toChain: DestinationChain
} => {

    const fromChainId: SupportedChainId = Number(FROM_CHAIN_ID) as SupportedChainId;
    const toChainId: SupportedChainId = Number(TO_CHAIN_ID) as SupportedChainId;

    const web3 = new Web3()

    const txParams: TXParams = {
        amount:`${AMOUNT}`,
        fromChainId,
        isTestnet:Boolean(IS_TESTNET),
        recipient:`${RECIPIENT_ADDRESS}`,
        toChainId
    }

    const fromChain: OriginalChain = {
        chainId: fromChainId,
        messenger: CHAIN_IDS_TO_TOKEN_MESSENGER_ADDRESSES[fromChainId],
        usdc: CHAIN_IDS_TO_USDC_ADDRESSES[fromChainId]
    }

    const toChain: DestinationChain = {
        chainId: toChainId,
        domain: CHAIN_ID_TO_DESTINATION_DOMAIN[toChainId],
        transmitter:CHAIN_IDS_TO_MESSAGE_TRANSMITTER_ADDRESSES[toChainId]
    }

    return {txParams, fromChain, toChain}

}