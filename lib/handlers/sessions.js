import { LEGISCAN_BASE_URL } from '../config.js';
export const fetchSessionListByState = async (state = 'ALL', apiKey) => {
    const op = 'getSessionList';
    try {
        const res = await fetch(`${LEGISCAN_BASE_URL}/?key=${apiKey}&op=${op}&state=${state}`).then(res => res.json());
        return res.sessions;
    }
    catch (error) {
        console.log('Error fetching', state, 'error:', error);
        return undefined;
    }
};
