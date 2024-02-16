import { LEGISCAN_BASE_URL } from '../config.js';
export const fetchSearch = async (query, apiKey, page = 1, year = 2, state = 'ALL', sessionId) => {
    const op = 'getSearch';
    const stateOrSessionParams = sessionId ? `id=${sessionId}` : `state=${state}`;
    try {
        const res = await fetch(`${LEGISCAN_BASE_URL}/?key=${apiKey}&op=${op}&${stateOrSessionParams}&page=${page}&year=${year}&query=${query}`).then(res => res.json());
        return res;
    }
    catch (error) {
        console.log('Error fetching', query, 'error:', error);
        return undefined;
    }
};
async function getPaginatedSearchResults(query, apiKey, page = 1, year = 2, state = 'ALL', sessionId, accumulatedResults = []) {
    const res = await fetchSearch(query, apiKey, page, year, state, sessionId);
    if (!res?.results || page > res.summary.page_total) {
        return accumulatedResults;
    }
    const updatedResults = [...accumulatedResults, ...res.results];
    return getPaginatedSearchResults(query, apiKey, page + 1, year, state, sessionId, updatedResults);
}
export const searchAllPages = async (query, apiKey, year = 2, state = 'ALL', sessionId) => {
    const page = 1;
    const response = await getPaginatedSearchResults(query, apiKey, page, year, state, sessionId);
    return response;
};
export const fetchSearchRaw = async (query, apiKey, page = 1, year = 2, state = 'ALL', sessionId) => {
    const op = 'getSearchRaw';
    const stateOrSessionParams = sessionId ? `id=${sessionId}` : `state=${state}`;
    try {
        const res = await fetch(`${LEGISCAN_BASE_URL}/?key=${apiKey}&op=${op}&${stateOrSessionParams}&page=${page}&year=${year}&query=${query}`).then(res => res.json());
        return res;
    }
    catch (error) {
        console.log('Error fetching', query, 'error:', error);
        return undefined;
    }
};
