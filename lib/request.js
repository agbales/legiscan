import { LEGISCAN_BASE_URL } from './config.js';
export class LegiscanError extends Error {
    alert;
    op;
    constructor(op, alert) {
        super(alert ?? `LegiScan API error for ${op}`);
        this.name = 'LegiscanError';
        this.op = op;
        this.alert = alert;
    }
}
function buildUrl(apiKey, op, params = {}) {
    const searchParams = new URLSearchParams({ key: apiKey, op });
    for (const [key, value] of Object.entries(params)) {
        if (value !== undefined && value !== '') {
            searchParams.set(key, String(value));
        }
    }
    return `${LEGISCAN_BASE_URL}/?${searchParams.toString()}`;
}
export async function legiscanRequest(apiKey, op, params = {}) {
    const res = await fetch(buildUrl(apiKey, op, params));
    const data = (await res.json());
    if (data.status === 'ERROR') {
        throw new LegiscanError(op, data.alert);
    }
    return data;
}
/** getDatasetRaw returns a binary ZIP stream (or JSON error). */
export async function legiscanRequestBinary(apiKey, op, params = {}) {
    const res = await fetch(buildUrl(apiKey, op, params));
    const contentType = res.headers.get('content-type') ?? '';
    if (contentType.includes('application/json')) {
        const data = (await res.json());
        if (data.status === 'ERROR') {
            throw new LegiscanError(op, data.alert);
        }
        throw new LegiscanError(op, 'Expected binary response from LegiScan');
    }
    if (!res.ok) {
        throw new LegiscanError(op, `HTTP ${res.status}`);
    }
    return res.arrayBuffer();
}
