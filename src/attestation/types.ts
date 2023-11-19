
export enum AttestationStatus {
    complete = 'complete',
    pending_confirmations = 'pending_confirmations',
}

export enum IrisApiUrl {
    mainnet = 'https://iris-api.circle.com',
    testnet = 'https://iris-api-sandbox.circle.com'
}

export interface Attestation {
    message: string | null
    status: AttestationStatus
}

export interface AttestationResponse {
    attestation: string | null
    status: AttestationStatus
}