import axios from 'axios';
import type { AxiosInstance } from 'axios';
import {
    Attestation,
    AttestationResponse,
    AttestationStatus,
} from './types';
import { geBaseURL } from '../utils'

/**
 * Extracts the response's message & status into an object
 * @param attestationResponse the response of the USDC attesters
 * @returns an attestation response object
 */
const mapAttestation = (attestationResponse: AttestationResponse) => ({
    message: attestationResponse.attestation,
    status: attestationResponse.status,
});

export const getAttestation = async (
    isTestnet: boolean,
    messageHash: string
): Promise<Attestation | null> => {
    const baseURL: string = geBaseURL(isTestnet);
    const axiosInstance: AxiosInstance = axios.create({ baseURL });

    try {
        const response = await axiosInstance.get<AttestationResponse>(
            `/${messageHash}`
        );
        return mapAttestation(response?.data);
    } catch (error) {
        // Treat 404 as pending and keep polling
        if (axios.isAxiosError(error) && error?.response?.status === 404) {
            const response = {
                attestation: null,
                status: AttestationStatus.pending_confirmations,
            }
            return mapAttestation(response)
        } else {
            console.error(error)
            return null
        }
    }
}