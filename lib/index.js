import { fetchBill, fetchBillTextByBillId, fetchBillTextByDocId, fetchBills, } from './handlers/bills.js';
import { fetchSearch, fetchSearchRaw, searchAllPages, } from './handlers/search.js';
import { fetchMasterListByState, fetchMasterListByStateRaw, fetchMasterListBySessionId, fetchMasterListBySessionIdRaw, } from './handlers/masterLists.js';
import { fetchAmendmentById } from './handlers/amendments.js';
import { fetchSessionListByState } from './handlers/sessions.js';
import { fetchSupplementById } from './handlers/supplements.js';
import { fetchRollCallById } from './handlers/rollcalls.js';
import { fetchPeopleBySessionId, fetchPersonById, fetchPersonWithSponsoredBillsById, } from './handlers/people.js';
import { fetchDataset, fetchDatasetList, fetchDatasetRaw, } from './handlers/datasets.js';
import { fetchMonitorList, fetchMonitorListRaw, setMonitorByListAndAction, } from './handlers/monitor.js';
export { LegiscanError } from './request.js';
export class Legiscan {
    apiKey;
    constructor(apiKey) {
        this.apiKey = apiKey;
    }
    // -------------
    // Search
    // -------------
    /** getSearch — full text search, 50 results per page */
    async search({ query, page, year, state, sessionId }) {
        return fetchSearch(query, this.apiKey, page, year, state, sessionId);
    }
    /** Convenience: pages through getSearch until exhausted */
    async searchAllResults({ query, year, state, sessionId }) {
        return searchAllPages(query, this.apiKey, year, state, sessionId);
    }
    /** getSearchRaw — up to 2000 abbreviated results per page */
    async getSearchRaw({ query, page, year, state, sessionId }) {
        return fetchSearchRaw(query, this.apiKey, page, year, state, sessionId);
    }
    // -------------
    // Bills
    // -------------
    /** getBill */
    async getBill(billId) {
        return fetchBill(billId, this.apiKey);
    }
    /** Convenience batch over getBill */
    async getBills(billIds) {
        return fetchBills(billIds, this.apiKey);
    }
    /**
     * Convenience: getBill then getBillText for the latest text.
     * Prefer getBillText / getBillTextByDocId when you already have a doc_id.
     */
    async getBillTextByBillId(billId) {
        return fetchBillTextByBillId(billId, this.apiKey);
    }
    /** getBillText */
    async getBillText(docId) {
        return fetchBillTextByDocId(docId, this.apiKey);
    }
    /** Alias for getBillText */
    async getBillTextByDocId(docId) {
        return this.getBillText(docId);
    }
    // -------------
    // Master lists
    // -------------
    /** getMasterList by state (current session) */
    async getMasterListByState(state) {
        return fetchMasterListByState(state, this.apiKey);
    }
    /** getMasterListRaw by state */
    async getMasterListByStateRaw(state) {
        return fetchMasterListByStateRaw(state, this.apiKey);
    }
    /** getMasterList by session id */
    async getMasterListBySessionId(sessionId) {
        return fetchMasterListBySessionId(sessionId, this.apiKey);
    }
    /** getMasterListRaw by session id */
    async getMasterListBySessionIdRaw(sessionId) {
        return fetchMasterListBySessionIdRaw(sessionId, this.apiKey);
    }
    // -------------
    // Amendments
    // -------------
    /** getAmendment */
    async getAmendment(amendmentId) {
        return fetchAmendmentById(amendmentId, this.apiKey);
    }
    /** Alias for getAmendment */
    async getAmendmentById(amendmentId) {
        return this.getAmendment(amendmentId);
    }
    // -------------
    // Sessions
    // -------------
    /** getSessionList — omit state for all sessions */
    async getSessionList(state) {
        return fetchSessionListByState(this.apiKey, state);
    }
    /** Alias for getSessionList */
    async getSessionListByState(state) {
        return this.getSessionList(state);
    }
    // -------------
    // Supplements
    // -------------
    /** getSupplement */
    async getSupplement(supplementId) {
        return fetchSupplementById(supplementId, this.apiKey);
    }
    /** Alias for getSupplement */
    async getSupplementById(supplementId) {
        return this.getSupplement(supplementId);
    }
    // -------------
    // Roll Calls
    // -------------
    /** getRollCall */
    async getRollCall(rollCallId) {
        return fetchRollCallById(rollCallId, this.apiKey);
    }
    /** Alias for getRollCall */
    async getRollCallById(rollCallId) {
        return this.getRollCall(rollCallId);
    }
    // -------------
    // People
    // -------------
    /** getPerson */
    async getPerson(peopleId) {
        return fetchPersonById(peopleId, this.apiKey);
    }
    /** Alias for getPerson */
    async getPersonById(peopleId) {
        return this.getPerson(peopleId);
    }
    /** getSessionPeople */
    async getSessionPeople(sessionId) {
        return fetchPeopleBySessionId(sessionId, this.apiKey);
    }
    /** getSponsoredList */
    async getSponsoredList(peopleId) {
        return fetchPersonWithSponsoredBillsById(peopleId, this.apiKey);
    }
    /** Alias for getSponsoredList */
    async getPersonWithSponsoredBillsById(peopleId) {
        return this.getSponsoredList(peopleId);
    }
    // -------------
    // Datasets
    // -------------
    /** getDataset — ZIP as base64 in JSON */
    async getDataset(sessionId, accessKey, format) {
        return fetchDataset(sessionId, accessKey, this.apiKey, format);
    }
    /** getDatasetRaw — binary ZIP ArrayBuffer */
    async getDatasetRaw(sessionId, accessKey, format) {
        return fetchDatasetRaw(sessionId, accessKey, this.apiKey, format);
    }
    /** getDatasetList */
    async getDatasetList(state, year) {
        return fetchDatasetList(this.apiKey, state, year);
    }
    // -------------
    // Monitor
    // -------------
    /** getMonitorList — record defaults to current */
    async getMonitorList(record = 'current') {
        return fetchMonitorList(this.apiKey, record);
    }
    /** getMonitorListRaw — record defaults to current */
    async getMonitorListRaw(record = 'current') {
        return fetchMonitorListRaw(this.apiKey, record);
    }
    /** setMonitor */
    async setMonitor(list, action, stance) {
        return setMonitorByListAndAction({
            list,
            action,
            stance,
            apiKey: this.apiKey,
        });
    }
}
