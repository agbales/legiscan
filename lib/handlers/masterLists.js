import { legiscanRequest } from '../request.js';
export const fetchMasterListByState = async (state, apiKey) => {
    const res = await legiscanRequest(apiKey, 'getMasterList', { state });
    return res.masterlist;
};
export const fetchMasterListByStateRaw = async (state, apiKey) => {
    const res = await legiscanRequest(apiKey, 'getMasterListRaw', { state });
    return res.masterlist;
};
export const fetchMasterListBySessionId = async (sessionId, apiKey) => {
    const res = await legiscanRequest(apiKey, 'getMasterList', { id: sessionId });
    return res.masterlist;
};
export const fetchMasterListBySessionIdRaw = async (sessionId, apiKey) => {
    const res = await legiscanRequest(apiKey, 'getMasterListRaw', {
        id: sessionId,
    });
    return res.masterlist;
};
