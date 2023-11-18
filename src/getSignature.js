
const getSignature = async (messageHash) => {

    console.log("Step 4: Get signature");

    let attestationResponse = {status: 'pending'};

    while(attestationResponse.status != 'complete') {
        const response = await fetch(`https://iris-api-sandbox.circle.com/attestations/${messageHash}`);
        attestationResponse = await response.json()
        await new Promise(r => setTimeout(r, 2000));
    }

    const attestationSignature = attestationResponse.attestation;
    console.log(`Signature: ${attestationSignature}`)

    return attestationSignature;
}

module.exports = getSignature;