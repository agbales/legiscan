import { legiscanRequest } from '../request.js';
export const fetchSessionListByState = async (apiKey, state) => {
    const res = await legiscanRequest(apiKey, 'getSessionList', { state });
    return res.sessions;
};
