import { legiscanRequest } from '../request.js';
export const fetchSupplementById = async (supplementId, apiKey) => {
    const res = await legiscanRequest(apiKey, 'getSupplement', {
        id: supplementId,
    });
    return res.supplement;
};
