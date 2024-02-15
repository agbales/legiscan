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

const fetchSearch = async (
  query: string,
  apiKey: string,
  page: number,
  state: string
): Promise<SearchResponse | undefined> => {
  const op = 'getSearch';
  try {
    const res = await fetch(
      `${LEGISCAN_BASE_URL}/?key=${apiKey}&op=${op}&state=${state}&page=${page}&query=${query}`
    ).then(res => res.json());

    const allBillResults = Object.keys(res.searchresult)
      .filter(key => key !== 'summary')
      .reduce((arr, key) => {
        const result = res.searchresult[key];
        arr.push(result);
        return arr;
      }, [] as SearchResult[]);

    return {
      summary: res.searchresult.summary,
      results: allBillResults,
    };
  } catch (error) {
    console.log('Error fetching', query, 'error:', error);
    return undefined;
  }
};

async function getPaginatedSearchResults(
  query: string,
  apiKey: string,
  state: string,
  page: number = 1,
  accumulatedResults: SearchResult[] = []
): Promise<SearchResult[]> {
  const res = await fetchSearch(query, apiKey, page, state);

  if (!res?.results || page > res.summary.page_total) {
    return accumulatedResults;
  }

  const updatedResults = [...accumulatedResults, ...res.results];

  return getPaginatedSearchResults(
    query,
    apiKey,
    state,
    page + 1,
    updatedResults
  );
}

export const searchWithPagination = async (
  query: string,
  apiKey: string,
  state: string = 'ALL'
) => {
  const response = await getPaginatedSearchResults(query, apiKey, state);

  return response;
};

export const fetchBillTextByDocId = async (
  doc_id: number,
  apiKey: string
): Promise<BillText | undefined> => {
  const op = 'getBillText';
  const fetchUrl = `${LEGISCAN_BASE_URL}/?key=${apiKey}&op=${op}&id=` + doc_id;

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
