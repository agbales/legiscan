import { fetchBill, fetchBillTextByBillId, fetchBillTextByDocId, fetchBills, } from './handlers/bills.js';
import { fetchSearch, fetchSearchRaw, searchAllPages, } from './handlers/search.js';
import { fetchMasterListByState, fetchMasterListByStateRaw, fetchMasterListBySessionId, fetchMasterListBySessionIdRaw, } from './handlers/masterLists.js';
import { fetchAmendmentById } from './handlers/amendments.js';
import { fetchSessionListByState } from './handlers/sessions.js';
import { fetchSupplementById } from './handlers/supplements.js';
import { fetchRollCallById } from './handlers/rollcalls.js';
import { fetchPeopleBySessionId, fetchPersonById, fetchPersonWithSponsoredBillsById, } from './handlers/people.js';
import { fetchDataset, fetchDatasetList } from './handlers/datasets.js';
import { fetchMonitorList, fetchMonitorListRaw, setMonitorByListAndAction, } from './handlers/monitor.js';
export class Legiscan {
    apiKey;
    constructor(apiKey) {
        this.apiKey = apiKey;
    }
    // -------------
    // Search
    // -------------
    async search({ query, page, year, state, id }) {
        return fetchSearch(query, this.apiKey, page, year, state, id);
    }
    async searchAllResults({ query, year, state, id }) {
        return searchAllPages(query, this.apiKey, year, state, id);
    }
    async getSearchRaw({ query, page, year, state, id }) {
        return fetchSearchRaw(query, this.apiKey, page, year, state, id);
    }
    // -------------
    // Bills
    // -------------
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
    // -------------
    // Masterlists
    // -------------
    async getMasterListByState(state) {
        return fetchMasterListByState(state, this.apiKey);
    }
    async getMasterListByStateRaw(state) {
        return fetchMasterListByStateRaw(state, this.apiKey);
    }
    async getMasterListBySessionId(sessionId) {
        return fetchMasterListBySessionId(sessionId, this.apiKey);
    }
    async getMasterListBySessionIdRaw(sessionId) {
        return fetchMasterListBySessionIdRaw(sessionId, this.apiKey);
    }
    // -------------
    // Amendments
    // -------------
    async getAmendmentById(amendmentId) {
        return fetchAmendmentById(amendmentId, this.apiKey);
    }
    // -------------
    // Sessions
    // -------------
    async getSessionListByState(state) {
        return fetchSessionListByState(state, this.apiKey);
    }
    // -------------
    // Supplements
    // -------------
    async getSupplementById(supplementId) {
        return fetchSupplementById(supplementId, this.apiKey);
    }
    // -------------
    // Roll Calls
    // -------------
    async getRollCallById(rollCallId) {
        return fetchRollCallById(rollCallId, this.apiKey);
    }
    // -------------
    // People
    // -------------
    async getPersonById(peopleId) {
        return fetchPersonById(peopleId, this.apiKey);
    }
    async getSessionPeople(sessionId) {
        return fetchPeopleBySessionId(sessionId, this.apiKey);
    }
    async getPersonWithSponsoredBillsById(peopleId) {
        return fetchPersonWithSponsoredBillsById(peopleId, this.apiKey);
    }
    // -------------
    // Datasets
    // -------------
    async getDataset(sessionId, accessKey) {
        return fetchDataset(sessionId, accessKey, this.apiKey);
    }
    async getDatasetList(state, year) {
        return fetchDatasetList(this.apiKey, state, year);
    }
    // -------------
    // Monitored
    // -------------
    async getMonitorList(record) {
        return fetchMonitorList(record, this.apiKey);
    }
    async getMonitorListRaw(record) {
        return fetchMonitorListRaw(record, this.apiKey);
    }
    async setMonitor(list, action, stance) {
        return setMonitorByListAndAction({
            list,
            action,
            stance,
            apiKey: this.apiKey,
        });
    }
}
