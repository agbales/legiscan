export declare class LegiscanError extends Error {
    readonly alert?: string;
    readonly op: string;
    constructor(op: string, alert?: string);
}
export type LegiscanApiResponse = {
    status: 'OK' | 'ERROR';
    alert?: string;
    [key: string]: unknown;
};
type RequestParams = Record<string, string | number | undefined>;
export declare function legiscanRequest(apiKey: string, op: string, params?: RequestParams): Promise<LegiscanApiResponse>;
/** getDatasetRaw returns a binary ZIP stream (or JSON error). */
export declare function legiscanRequestBinary(apiKey: string, op: string, params?: RequestParams): Promise<ArrayBuffer>;
export {};
