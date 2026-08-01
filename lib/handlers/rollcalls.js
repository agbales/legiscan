import { legiscanRequest } from '../request.js';
export const fetchRollCallById = async (rollCallId, apiKey) => {
    const res = await legiscanRequest(apiKey, 'getRollCall', { id: rollCallId });
    return res.roll_call;
};
