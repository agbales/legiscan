import { BillText, LegiscanBill, SearchResponse, SearchResult } from './types';

const LEGISCAN_BASE_URL = 'https://api.legiscan.com';

export const fetchBill = async (
  billId: number,
  apiKey: string
): Promise<LegiscanBill | undefined> => {
  const op = 'getBill';
  try {
    const res = await fetch(
      `${LEGISCAN_BASE_URL}/?key=${apiKey}&op=${op}&id=${billId}`
    ).then(res => res.json());
    return res.bill;
  } catch (error) {
    console.log('Error fetching', billId, 'error:', error);
    return undefined;
  }
};

export const fetchBills = async (
  billIds: number[],
  apiKey: string
): Promise<(LegiscanBill | undefined)[]> => {
  return await Promise.all(billIds.map(id => fetchBill(id, apiKey)));
};

export const fetchMasterListByState = async (state: string, apiKey: string) => {
  const op = 'getMasterListRaw';
  try {
    const stateBills = await fetch(
      `${LEGISCAN_BASE_URL}/?key=${apiKey}&op=${op}&state=${state}`
    ).then(res => res.json());
    return stateBills;
  } catch (error) {
    console.log('Error fetching', state, 'error:', error);
    return undefined;
  }
};

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

export const fetchBillTextByDocId = async (
  doc_id: number,
  apiKey: string
): Promise<BillText | undefined> => {
  const op = 'getBillText';
  const fetchUrl = `${LEGISCAN_BASE_URL}/?key=${apiKey}&op=${op}&id=${doc_id}`;

  try {
    const res = await fetch(fetchUrl).then(res => res.json());
    return res.text;
  } catch (error) {
    console.error('Error fetching bill text', JSON.stringify(error));
    return undefined;
  }
};

export const fetchBillTextByBillId = async (
  billId: number,
  apiKey: string
): Promise<BillText | undefined> => {
  const billResponse = await fetchBill(billId, apiKey);

  const docId = billResponse?.texts[0]?.doc_id;

  if (!docId) {
    console.log('No doc available for ', billId);
    return;
  }

  const billText = fetchBillTextByDocId(docId, apiKey);

  return billText;
};
