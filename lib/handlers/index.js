import { LEGISCAN_BASE_URL } from '../config.js';
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
export const fetchBillTextByDocId = async (doc_id, apiKey) => {
    const op = 'getBillText';
    const fetchUrl = `${LEGISCAN_BASE_URL}/?key=${apiKey}&op=${op}&id=${doc_id}`;
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
