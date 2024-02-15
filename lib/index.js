import { fetchBill, fetchBillTextByBillId, fetchBillTextByDocId, fetchBills, fetchMasterListByState, searchWithPagination, } from './handlers/index.js';
export class Legiscan {
    apiKey;
    constructor(apiKey) {
        this.apiKey = apiKey;
    }
    async search(query, state) {
        return searchWithPagination(query, this.apiKey, state);
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
