import { Dataset, DatasetFormat, DatasetListItem } from './types.js';
export declare const fetchDataset: (sessionId: number, accessKey: string, apiKey: string, format?: DatasetFormat) => Promise<Dataset>;
export declare const fetchDatasetRaw: (sessionId: number, accessKey: string, apiKey: string, format?: DatasetFormat) => Promise<ArrayBuffer>;
export declare const fetchDatasetList: (apiKey: string, state?: string, year?: number) => Promise<DatasetListItem[]>;
