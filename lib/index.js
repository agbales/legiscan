import { fetchBill, fetchBillTextByBillId, fetchBillTextByDocId, fetchBills, fetchMasterListByState, fetchSearch, fetchSearchRaw, searchAllPages, } from './handlers/index.js';
export class Legiscan {
    apiKey;
    constructor(apiKey) {
        this.apiKey = apiKey;
    }
    async search(query, page, year, state, id) {
        return fetchSearch(query, this.apiKey, page, year, state, id);
    }
    async searchAllResults(query, year, state, id) {
        return searchAllPages(query, this.apiKey, year, state, id);
    }
    async getSearchRaw(query, page, year, state, id) {
        return fetchSearchRaw(query, this.apiKey, page, year, state, id);
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
