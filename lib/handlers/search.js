import { legiscanRequest } from '../request.js';
function parseSearchResults(searchresult) {
    const { summary, ...rest } = searchresult;
    const results = Object.keys(rest)
        .filter(key => /^\d+$/.test(key))
        .sort((a, b) => Number(a) - Number(b))
        .map(key => rest[key]);
    return {
        summary: summary,
        results,
    };
}
export const fetchSearch = async (query, apiKey, page = 1, year = 2, state = 'ALL', sessionId) => {
    const res = await legiscanRequest(apiKey, 'getSearch', {
        query,
        page,
        year: sessionId ? undefined : year,
        state: sessionId ? undefined : state,
        id: sessionId,
    });
    return parseSearchResults(res.searchresult);
};
async function getPaginatedSearchResults(query, apiKey, page = 1, year = 2, state = 'ALL', sessionId, accumulatedResults = []) {
    const res = await fetchSearch(query, apiKey, page, year, state, sessionId);
    if (!res.results.length || page > res.summary.page_total) {
        return accumulatedResults;
    }
    const updatedResults = [...accumulatedResults, ...res.results];
    return getPaginatedSearchResults(query, apiKey, page + 1, year, state, sessionId, updatedResults);
}
export const searchAllPages = async (query, apiKey, year = 2, state = 'ALL', sessionId) => {
    return getPaginatedSearchResults(query, apiKey, 1, year, state, sessionId);
};
export const fetchSearchRaw = async (query, apiKey, page = 1, year = 2, state = 'ALL', sessionId) => {
    const res = await legiscanRequest(apiKey, 'getSearchRaw', {
        query,
        page,
        year: sessionId ? undefined : year,
        state: sessionId ? undefined : state,
        id: sessionId,
    });
    return parseSearchResults(res.searchresult);
};
