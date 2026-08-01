import { legiscanRequest, legiscanRequestBinary } from '../request.js';
import { Dataset, DatasetFormat, DatasetListItem } from './types.js';

export const fetchDataset = async (
  sessionId: number,
  accessKey: string,
  apiKey: string,
  format?: DatasetFormat
): Promise<Dataset> => {
  const res = await legiscanRequest(apiKey, 'getDataset', {
    id: sessionId,
    access_key: accessKey,
    format,
  });
  return res.dataset as Dataset;
};

export const fetchDatasetRaw = async (
  sessionId: number,
  accessKey: string,
  apiKey: string,
  format?: DatasetFormat
): Promise<ArrayBuffer> => {
  return legiscanRequestBinary(apiKey, 'getDatasetRaw', {
    id: sessionId,
    access_key: accessKey,
    format,
  });
};

export const fetchDatasetList = async (
  apiKey: string,
  state?: string,
  year?: number
): Promise<DatasetListItem[]> => {
  const res = await legiscanRequest(apiKey, 'getDatasetList', { state, year });
  return res.datasetlist as DatasetListItem[];
};
