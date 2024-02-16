import { LEGISCAN_BASE_URL } from '../config.js';
import { SearchResponse, SearchResult } from './types.js';

export const fetchSearch = async (
  query: string,
  apiKey: string,
  page: number = 1,
  year: number = 2,
  state: string = 'ALL',
  sessionId?: number
): Promise<SearchResponse | undefined> => {
  const op = 'getSearch';

  const stateOrSessionParams = sessionId ? `id=${sessionId}` : `state=${state}`;

  try {
    const res = await fetch(
      `${LEGISCAN_BASE_URL}/?key=${apiKey}&op=${op}&${stateOrSessionParams}&page=${page}&year=${year}&query=${query}`
    ).then(res => res.json());

    return res;
  } catch (error) {
    console.log('Error fetching', query, 'error:', error);
    return undefined;
  }
};

async function getPaginatedSearchResults(
  query: string,
  apiKey: string,
  page: number = 1,
  year: number = 2,
  state: string = 'ALL',
  sessionId?: number,
  accumulatedResults: SearchResult[] = []
): Promise<SearchResult[]> {
  const res = await fetchSearch(query, apiKey, page, year, state, sessionId);

  if (!res?.results || page > res.summary.page_total) {
    return accumulatedResults;
  }

  const updatedResults = [...accumulatedResults, ...res.results];

  return getPaginatedSearchResults(
    query,
    apiKey,
    page + 1,
    year,
    state,
    sessionId,
    updatedResults
  );
}

export const searchAllPages = async (
  query: string,
  apiKey: string,
  year: number = 2,
  state: string = 'ALL',
  sessionId?: number
) => {
  const page = 1;
  const response = await getPaginatedSearchResults(
    query,
    apiKey,
    page,
    year,
    state,
    sessionId
  );

  return response;
};

export const fetchSearchRaw = async (
  query: string,
  apiKey: string,
  page: number = 1,
  year: number = 2,
  state: string = 'ALL',
  sessionId?: number
): Promise<SearchResponse | undefined> => {
  const op = 'getSearchRaw';

  const stateOrSessionParams = sessionId ? `id=${sessionId}` : `state=${state}`;

  try {
    const res = await fetch(
      `${LEGISCAN_BASE_URL}/?key=${apiKey}&op=${op}&${stateOrSessionParams}&page=${page}&year=${year}&query=${query}`
    ).then(res => res.json());

    return res;
  } catch (error) {
    console.log('Error fetching', query, 'error:', error);
    return undefined;
  }
};
