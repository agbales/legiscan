import { legiscanRequest, legiscanRequestBinary } from '../request.js';
export const fetchDataset = async (sessionId, accessKey, apiKey, format) => {
    const res = await legiscanRequest(apiKey, 'getDataset', {
        id: sessionId,
        access_key: accessKey,
        format,
    });
    return res.dataset;
};
export const fetchDatasetRaw = async (sessionId, accessKey, apiKey, format) => {
    return legiscanRequestBinary(apiKey, 'getDatasetRaw', {
        id: sessionId,
        access_key: accessKey,
        format,
    });
};
export const fetchDatasetList = async (apiKey, state, year) => {
    const res = await legiscanRequest(apiKey, 'getDatasetList', { state, year });
    return res.datasetlist;
};
