const LEGISCAN_BASE_URL = 'https://api.legiscan.com';
export const fetchBill = async (billId, apiKey) => {
    const op = 'getBill';
    try {
        const res = await fetch(`${LEGISCAN_BASE_URL}/?key=${apiKey}&op=${op}&id=${billId}`).then(res => res.json());
        return res.bill;
    }
    catch (error) {
        console.log('Error fetching', billId, 'error:', error);
        return undefined;
    }
};
export const fetchBills = async (billIds, apiKey) => {
    return await Promise.all(billIds.map(id => fetchBill(id, apiKey)));
};
export const fetchMasterListByState = async (state, apiKey) => {
    const op = 'getMasterListRaw';
    try {
        const stateBills = await fetch(`${LEGISCAN_BASE_URL}/?key=${apiKey}&op=${op}&state=${state}`).then(res => res.json());
        return stateBills;
    }
    catch (error) {
        console.log('Error fetching', state, 'error:', error);
        return undefined;
    }
};
export const fetchSearch = async (query, apiKey, page = 1, state = 'ALL') => {
    const op = 'getSearch';
    try {
        const res = await fetch(`${LEGISCAN_BASE_URL}/?key=${apiKey}&op=${op}&state=${state}&page=${page}&query=${query}`).then(res => res.json());
        return res;
    }
    catch (error) {
        console.log('Error fetching', query, 'error:', error);
        return undefined;
    }
};
async function getPaginatedSearchResults(query, apiKey, state, page = 1, accumulatedResults = []) {
    const res = await fetchSearch(query, apiKey, page, state);
    if (!res?.results || page > res.summary.page_total) {
        return accumulatedResults;
    }
    const updatedResults = [...accumulatedResults, ...res.results];
    return getPaginatedSearchResults(query, apiKey, state, page + 1, updatedResults);
}
export const searchAllPages = async (query, apiKey, state = 'ALL') => {
    const response = await getPaginatedSearchResults(query, apiKey, state);
    return response;
};
export const fetchBillTextByDocId = async (doc_id, apiKey) => {
    const op = 'getBillText';
    const fetchUrl = `${LEGISCAN_BASE_URL}/?key=${apiKey}&op=${op}&id=` + doc_id;
    try {
        const res = await fetch(fetchUrl).then(res => res.json());
        return res.text;
    }
    catch (error) {
        console.error('Error fetching bill text', JSON.stringify(error));
        return undefined;
    }
};
export const fetchBillTextByBillId = async (billId, apiKey) => {
    const billResponse = await fetchBill(billId, apiKey);
    const docId = billResponse?.texts[0]?.doc_id;
    if (!docId) {
        console.log('No doc available for ', billId);
        return;
    }
    const billText = fetchBillTextByDocId(docId, apiKey);
    return billText;
};
