import { legiscanRequest } from '../request.js';
export const fetchBill = async (billId, apiKey) => {
    const res = await legiscanRequest(apiKey, 'getBill', { id: billId });
    return res.bill;
};
export const fetchBills = async (billIds, apiKey) => {
    return Promise.all(billIds.map(id => fetchBill(id, apiKey)));
};
export const fetchBillTextByDocId = async (docId, apiKey) => {
    const res = await legiscanRequest(apiKey, 'getBillText', { id: docId });
    return res.text;
};
export const fetchBillTextByBillId = async (billId, apiKey) => {
    const bill = await fetchBill(billId, apiKey);
    const texts = bill.texts ?? [];
    const docId = texts[texts.length - 1]?.doc_id;
    if (!docId) {
        return undefined;
    }
    return fetchBillTextByDocId(docId, apiKey);
};
