import { legiscanRequest } from '../request.js';
import {
  SearchRawResponse,
  SearchRawResult,
  SearchResponse,
  SearchResult,
} from './types.js';

type SearchResultBag = Record<string, unknown>;

function parseSearchResults<T>(searchresult: SearchResultBag): {
  summary: SearchResponse['summary'];
  results: T[];
} {
  const { summary, ...rest } = searchresult;
  const results = Object.keys(rest)
    .filter(key => /^\d+$/.test(key))
    .sort((a, b) => Number(a) - Number(b))
    .map(key => rest[key] as T);

  return {
    summary: summary as SearchResponse['summary'],
    results,
  };
}

export const fetchSearch = async (
  query: string,
  apiKey: string,
  page: number = 1,
  year: number = 2,
  state: string = 'ALL',
  sessionId?: number
): Promise<SearchResponse> => {
  const res = await legiscanRequest(apiKey, 'getSearch', {
    query,
    page,
    year: sessionId ? undefined : year,
    state: sessionId ? undefined : state,
    id: sessionId,
  });

  return parseSearchResults<SearchResult>(
    res.searchresult as SearchResultBag
  );
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

  if (!res.results.length || page > res.summary.page_total) {
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
  return getPaginatedSearchResults(query, apiKey, 1, year, state, sessionId);
};

export const fetchSearchRaw = async (
  query: string,
  apiKey: string,
  page: number = 1,
  year: number = 2,
  state: string = 'ALL',
  sessionId?: number
): Promise<SearchRawResponse> => {
  const res = await legiscanRequest(apiKey, 'getSearchRaw', {
    query,
    page,
    year: sessionId ? undefined : year,
    state: sessionId ? undefined : state,
    id: sessionId,
  });

  return parseSearchResults<SearchRawResult>(
    res.searchresult as SearchResultBag
  );
};
