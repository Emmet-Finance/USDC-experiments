
import {SupportedChainId} from "./constants";

export type OriginalChain  = {
    chainId: SupportedChainId,
    messenger: any,
    usdc: any,
}

export type DestinationChain = {
    chainId: SupportedChainId,
    domain: number,
    transmitter: any,
}

export type TXParams = {
    amount: string,
    fromChainId: SupportedChainId,
    isTestnet: boolean,
    recipient: string,
    toChainId: SupportedChainId,
}