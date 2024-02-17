import { LEGISCAN_BASE_URL } from '../config.js';
export const fetchAmendmentById = async (amendmentId, apiKey) => {
    const op = 'getAmendment';
    try {
        const res = await fetch(`${LEGISCAN_BASE_URL}/?key=${apiKey}&op=${op}&id=${amendmentId}`).then(res => res.json());
        return res.amendment;
    }
    catch (error) {
        console.log('Error fetching', amendmentId, 'error:', error);
        return undefined;
    }
};
