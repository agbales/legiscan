import { fetchBill, fetchBillTextByBillId, fetchBillTextByDocId, fetchBills, fetchMasterListByState, fetchSearch, searchAllPages, } from './handlers/index.js';
export class Legiscan {
    apiKey;
    constructor(apiKey) {
        this.apiKey = apiKey;
    }
    async search(query, page, state) {
        return fetchSearch(query, this.apiKey, page, state);
    }
    async searchAllResults(query, state) {
        return searchAllPages(query, this.apiKey, state);
    }
    async getBill(billId) {
        return fetchBill(billId, this.apiKey);
    }
    async getBills(billIds) {
        return fetchBills(billIds, this.apiKey);
    }
    async getBillTextByBillId(billId) {
        return fetchBillTextByBillId(billId, this.apiKey);
    }
    async getBillTextByDocId(docId) {
        return fetchBillTextByDocId(docId, this.apiKey);
    }
    async getMasterListByState(state) {
        return fetchMasterListByState(state, this.apiKey);
    }
}
