import { legiscanRequest } from '../request.js';
export const fetchAmendmentById = async (amendmentId, apiKey) => {
    const res = await legiscanRequest(apiKey, 'getAmendment', {
        id: amendmentId,
    });
    return res.amendment;
};
