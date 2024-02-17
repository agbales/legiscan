import { Dataset } from './types.js';
export declare const fetchDataset: (sessionId: number, accessKey: string, apiKey: string) => Promise<Dataset | undefined>;
export declare const fetchDatasetList: (apiKey: string, state?: string, year?: number) => Promise<Dataset[] | undefined>;
