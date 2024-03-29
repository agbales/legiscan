import {
  fetchBill,
  fetchBillTextByBillId,
  fetchBillTextByDocId,
  fetchBills,
} from './handlers/bills.js';
import {
  fetchSearch,
  fetchSearchRaw,
  searchAllPages,
} from './handlers/search.js';
import {
  fetchMasterListByState,
  fetchMasterListByStateRaw,
  fetchMasterListBySessionId,
  fetchMasterListBySessionIdRaw,
} from './handlers/masterLists.js';
import { fetchAmendmentById } from './handlers/amendments.js';
import {
  MonitorAction,
  MonitorStance,
  SearchAllParams,
  SearchParams,
} from './types.js';
import { fetchSessionListByState } from './handlers/sessions.js';
import { fetchSupplementById } from './handlers/supplements.js';
import { fetchRollCallById } from './handlers/rollcalls.js';
import { State } from './handlers/types.js';
import {
  fetchPeopleBySessionId,
  fetchPersonById,
  fetchPersonWithSponsoredBillsById,
} from './handlers/people.js';
import { fetchDataset, fetchDatasetList } from './handlers/datasets.js';
import {
  fetchMonitorList,
  fetchMonitorListRaw,
  setMonitorByListAndAction,
} from './handlers/monitor.js';

export class Legiscan {
  private apiKey: string;

  constructor(apiKey: string) {
    this.apiKey = apiKey;
  }

  // -------------
  // Search
  // -------------

  async search({ query, page, year, state, sessionId }: SearchParams) {
    return fetchSearch(query, this.apiKey, page, year, state, sessionId);
  }

  async searchAllResults({ query, year, state, sessionId }: SearchAllParams) {
    return searchAllPages(query, this.apiKey, year, state, sessionId);
  }

  async getSearchRaw({ query, page, year, state, sessionId }: SearchParams) {
    return fetchSearchRaw(query, this.apiKey, page, year, state, sessionId);
  }

  // -------------
  // Bills
  // -------------

  async getBill(billId: number) {
    return fetchBill(billId, this.apiKey);
  }

  async getBills(billIds: number[]) {
    return fetchBills(billIds, this.apiKey);
  }

  async getBillTextByBillId(billId: number) {
    return fetchBillTextByBillId(billId, this.apiKey);
  }

  async getBillTextByDocId(docId: number) {
    return fetchBillTextByDocId(docId, this.apiKey);
  }

  // -------------
  // Masterlists
  // -------------

  async getMasterListByState(state: State) {
    return fetchMasterListByState(state, this.apiKey);
  }

  async getMasterListByStateRaw(state: State) {
    return fetchMasterListByStateRaw(state, this.apiKey);
  }

  async getMasterListBySessionId(sessionId: number) {
    return fetchMasterListBySessionId(sessionId, this.apiKey);
  }

  async getMasterListBySessionIdRaw(sessionId: number) {
    return fetchMasterListBySessionIdRaw(sessionId, this.apiKey);
  }

  // -------------
  // Amendments
  // -------------

  async getAmendmentById(amendmentId: number) {
    return fetchAmendmentById(amendmentId, this.apiKey);
  }

  // -------------
  // Sessions
  // -------------

  async getSessionListByState(state: State) {
    return fetchSessionListByState(state, this.apiKey);
  }

  // -------------
  // Supplements
  // -------------

  async getSupplementById(supplementId: number) {
    return fetchSupplementById(supplementId, this.apiKey);
  }

  // -------------
  // Roll Calls
  // -------------

  async getRollCallById(rollCallId: number) {
    return fetchRollCallById(rollCallId, this.apiKey);
  }

  // -------------
  // People
  // -------------

  async getPersonById(peopleId: number) {
    return fetchPersonById(peopleId, this.apiKey);
  }

  async getSessionPeople(sessionId: number) {
    return fetchPeopleBySessionId(sessionId, this.apiKey);
  }

  async getPersonWithSponsoredBillsById(peopleId: number) {
    return fetchPersonWithSponsoredBillsById(peopleId, this.apiKey);
  }

  // -------------
  // Datasets
  // -------------

  async getDataset(sessionId: number, accessKey: string) {
    return fetchDataset(sessionId, accessKey, this.apiKey);
  }

  async getDatasetList(state?: State, year?: number) {
    return fetchDatasetList(this.apiKey, state, year);
  }

  // -------------
  // Monitored
  // -------------

  async getMonitorList(record: string) {
    return fetchMonitorList(record, this.apiKey);
  }

  async getMonitorListRaw(record: string) {
    return fetchMonitorListRaw(record, this.apiKey);
  }

  async setMonitor(
    list: string,
    action: MonitorAction,
    stance?: MonitorStance
  ) {
    return setMonitorByListAndAction({
      list,
      action,
      stance,
      apiKey: this.apiKey,
    });
  }
}
