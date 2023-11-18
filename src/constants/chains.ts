/**
 * List of all the chains/networks supported
 */
export enum Chain {
    ARB = 'ARB',
    AVAX = 'AVAX',
    BASE = 'BASE',
    ETH = 'ETH',
    OP = 'OP',
    POL = 'POL',
}

/**
 * List of all the chain/network IDs supported
 */
export enum SupportedChainId {
    ARB_GOERLI = 421613,
    AVAX_FUJI = 43113,
    BASE_GOERLI = 84531,
    ETH_GOERLI = 5,
    OP_GOERLI = 420,
    POL_MUMABI = 80001,
}

/**
 * List of all the chain/network IDs supported in hexadecimals
 * TODO: Infer from SupportedChainId
 */
export const SupportedChainIdHex = {
    ARB_GOERLI: '0x66eed',
    AVAX_FUJI: '0xa869',
    BASE_GOERLI: '0x14a33',
    ETH_GOERLI: '0x5',
    OP_GOERLI: '0x1a4',
    POL_MUMABI: '0x13881',
}

interface ChainToChainIdMap {
    [key: string]: number
}

/**
 * Maps a chain to it's chain ID
 */

export const CHAIN_TO_CHAIN_ID: ChainToChainIdMap = {
    [Chain.ARB]: SupportedChainId.ARB_GOERLI,
    [Chain.AVAX]: SupportedChainId.AVAX_FUJI,
    [Chain.BASE]: SupportedChainId.BASE_GOERLI,
    [Chain.ETH]: SupportedChainId.ETH_GOERLI,
    [Chain.OP]: SupportedChainId.OP_GOERLI,
    [Chain.POL]: SupportedChainId.POL_MUMABI,
}

interface ChainToChainNameMap {
    [key: string]: string
}

/**
 * Maps a chain to it's readable name
 */
export const CHAIN_TO_CHAIN_NAME: ChainToChainNameMap = {
    ETH: 'Ethereum',
    AVAX: 'Avalanche',
    ARB: 'Arbitrum',
    OP: 'Optimism',
    POL: 'Polygon',
    BASE: 'BASE'
}

/**
 * Array of all the supported chain IDs
 */
export const ALL_SUPPORTED_CHAIN_IDS: SupportedChainId[] = Object.values(
    SupportedChainId
).filter((id) => typeof id === 'number') as SupportedChainId[]

/**
 * List of Circle-defined IDs referring to specific domains
 */
export enum DestinationDomain {
    ETH = 0,
    AVAX = 1,
    OP = 2,
    ARB = 3,
    BASE = 6,
    POL = 7
}

// https://eips.ethereum.org/EIPS/eip-3085
interface AddEthereumChainParameter {
    chainId: string
    blockExplorerUrls?: string[]
    chainName?: string
    iconUrls?: string[]
    nativeCurrency?: {
        name: string
        symbol: string
        decimals: number
    }
    rpcUrls?: string[]
}

const ARB_GOERLI: AddEthereumChainParameter = {
    chainId: SupportedChainIdHex.ARB_GOERLI,
    blockExplorerUrls: ['https://goerli.arbiscan.io/'],
    chainName: 'Arbitrum Goerli Testnet',
    nativeCurrency: {
        name: 'Ethereum',
        symbol: 'ETH',
        decimals: 18,
    },
    rpcUrls: ['https://arb-goerli.g.alchemy.com/v2/demo'],
}

const AVAX_FUJI: AddEthereumChainParameter = {
    chainId: '0xa869',
    blockExplorerUrls: ['https://testnet.snowtrace.io/'],
    chainName: 'Avalanche FUJI C-Chain',
    nativeCurrency: {
        name: 'Avalanche',
        symbol: 'AVAX',
        decimals: 18,
    },
    rpcUrls: ['https://api.avax-test.network/ext/bc/C/rpc'],
}

const BASE_GOERLI: AddEthereumChainParameter = {
    chainId: '0x14a33',
    blockExplorerUrls: ['https://goerli.basescan.org'],
    chainName: 'Base Goerli',
    nativeCurrency: { name: 'Goerli Ether', symbol: 'ETH', decimals: 18 },
    rpcUrls: ['https://goerli.base.org']
}

const ETH_GOERLI: AddEthereumChainParameter = {
    chainId: '0x5',
    blockExplorerUrls: ['https://goerli.etherscan.io'],
    chainName: 'Goerli Test Network',
    nativeCurrency: {
        name: 'Goerli ETH',
        symbol: 'gorETH',
        decimals: 18,
    },
    rpcUrls: ['https://goerli.infura.io/v3/'],
}

const OP_GOERLI: AddEthereumChainParameter = {
    chainId: '0x1a4',
    blockExplorerUrls: ['https://goerli-optimism.etherscan.io'],
    chainName: 'Optimism Goerli',
    nativeCurrency: { name: 'Goerli Ether', symbol: 'ETH', decimals: 18 },
    rpcUrls: ['https://goerli.optimism.io']
}

const POL_MUMABI: AddEthereumChainParameter = {
    chainId: '0x13881',
    blockExplorerUrls: ['https://mumbai.polygonscan.com'],
    chainName: 'Polygon Mumbai',
    nativeCurrency: { name: 'MATIC', symbol: 'MATIC', decimals: 18 },
    rpcUrls: ['https://rpc.ankr.com/polygon_mumbai']
}

interface ChainIdToChainParameters {
    [key: string]: AddEthereumChainParameter
}

export const CHAIN_ID_HEXES_TO_PARAMETERS: ChainIdToChainParameters = {
    [SupportedChainIdHex.ARB_GOERLI]: ARB_GOERLI,
    [SupportedChainIdHex.AVAX_FUJI]: AVAX_FUJI,
    [SupportedChainIdHex.BASE_GOERLI]: BASE_GOERLI,
    [SupportedChainIdHex.ETH_GOERLI]: ETH_GOERLI,
    [SupportedChainIdHex.OP_GOERLI]: OP_GOERLI,
    [SupportedChainIdHex.POL_MUMABI]: POL_MUMABI,
}