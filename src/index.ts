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
import {
  DatasetFormat,
  MonitorRecord,
  State,
  StateAbbreviation,
} from './handlers/types.js';
import {
  fetchPeopleBySessionId,
  fetchPersonById,
  fetchPersonWithSponsoredBillsById,
} from './handlers/people.js';
import {
  fetchDataset,
  fetchDatasetList,
  fetchDatasetRaw,
} from './handlers/datasets.js';
import {
  fetchMonitorList,
  fetchMonitorListRaw,
  setMonitorByListAndAction,
} from './handlers/monitor.js';

export { LegiscanError } from './request.js';
export type {
  Amendment,
  BillText,
  Dataset,
  DatasetFormat,
  DatasetListItem,
  LegiscanBill,
  MasterList,
  MasterListItem,
  MasterListRaw,
  MasterListRawItem,
  MonitorRecord,
  Person,
  ProgressEvent,
  RollCall,
  SearchRawResponse,
  SearchRawResult,
  SearchResponse,
  SearchResult,
  Session,
  SessionPeopleResponse,
  SponsoredListResponse,
  State,
  StateAbbreviation,
  Supplement,
} from './handlers/types.js';
export type {
  MonitorAction,
  MonitorListRawResponse,
  MonitorListResponse,
  MonitorStance,
  SearchAllParams,
  SearchParams,
  SetMonitorResponse,
} from './types.js';

export class Legiscan {
  private apiKey: string;

  constructor(apiKey: string) {
    this.apiKey = apiKey;
  }

  // -------------
  // Search
  // -------------

  /** getSearch — full text search, 50 results per page */
  async search({ query, page, year, state, sessionId }: SearchParams) {
    return fetchSearch(query, this.apiKey, page, year, state, sessionId);
  }

  /** Convenience: pages through getSearch until exhausted */
  async searchAllResults({ query, year, state, sessionId }: SearchAllParams) {
    return searchAllPages(query, this.apiKey, year, state, sessionId);
  }

  /** getSearchRaw — up to 2000 abbreviated results per page */
  async getSearchRaw({ query, page, year, state, sessionId }: SearchParams) {
    return fetchSearchRaw(query, this.apiKey, page, year, state, sessionId);
  }

  // -------------
  // Bills
  // -------------

  /** getBill */
  async getBill(billId: number) {
    return fetchBill(billId, this.apiKey);
  }

  /** Convenience batch over getBill */
  async getBills(billIds: number[]) {
    return fetchBills(billIds, this.apiKey);
  }

  /**
   * Convenience: getBill then getBillText for the latest text.
   * Prefer getBillText / getBillTextByDocId when you already have a doc_id.
   */
  async getBillTextByBillId(billId: number) {
    return fetchBillTextByBillId(billId, this.apiKey);
  }

  /** getBillText */
  async getBillText(docId: number) {
    return fetchBillTextByDocId(docId, this.apiKey);
  }

  /** Alias for getBillText */
  async getBillTextByDocId(docId: number) {
    return this.getBillText(docId);
  }

  // -------------
  // Master lists
  // -------------

  /** getMasterList by state (current session) */
  async getMasterListByState(state: StateAbbreviation) {
    return fetchMasterListByState(state, this.apiKey);
  }

  /** getMasterListRaw by state */
  async getMasterListByStateRaw(state: StateAbbreviation) {
    return fetchMasterListByStateRaw(state, this.apiKey);
  }

  /** getMasterList by session id */
  async getMasterListBySessionId(sessionId: number) {
    return fetchMasterListBySessionId(sessionId, this.apiKey);
  }

  /** getMasterListRaw by session id */
  async getMasterListBySessionIdRaw(sessionId: number) {
    return fetchMasterListBySessionIdRaw(sessionId, this.apiKey);
  }

  // -------------
  // Amendments
  // -------------

  /** getAmendment */
  async getAmendment(amendmentId: number) {
    return fetchAmendmentById(amendmentId, this.apiKey);
  }

  /** Alias for getAmendment */
  async getAmendmentById(amendmentId: number) {
    return this.getAmendment(amendmentId);
  }

  // -------------
  // Sessions
  // -------------

  /** getSessionList — omit state for all sessions */
  async getSessionList(state?: StateAbbreviation) {
    return fetchSessionListByState(this.apiKey, state);
  }

  /** Alias for getSessionList */
  async getSessionListByState(state?: StateAbbreviation) {
    return this.getSessionList(state);
  }

  // -------------
  // Supplements
  // -------------

  /** getSupplement */
  async getSupplement(supplementId: number) {
    return fetchSupplementById(supplementId, this.apiKey);
  }

  /** Alias for getSupplement */
  async getSupplementById(supplementId: number) {
    return this.getSupplement(supplementId);
  }

  // -------------
  // Roll Calls
  // -------------

  /** getRollCall */
  async getRollCall(rollCallId: number) {
    return fetchRollCallById(rollCallId, this.apiKey);
  }

  /** Alias for getRollCall */
  async getRollCallById(rollCallId: number) {
    return this.getRollCall(rollCallId);
  }

  // -------------
  // People
  // -------------

  /** getPerson */
  async getPerson(peopleId: number) {
    return fetchPersonById(peopleId, this.apiKey);
  }

  /** Alias for getPerson */
  async getPersonById(peopleId: number) {
    return this.getPerson(peopleId);
  }

  /** getSessionPeople */
  async getSessionPeople(sessionId: number) {
    return fetchPeopleBySessionId(sessionId, this.apiKey);
  }

  /** getSponsoredList */
  async getSponsoredList(peopleId: number) {
    return fetchPersonWithSponsoredBillsById(peopleId, this.apiKey);
  }

  /** Alias for getSponsoredList */
  async getPersonWithSponsoredBillsById(peopleId: number) {
    return this.getSponsoredList(peopleId);
  }

  // -------------
  // Datasets
  // -------------

  /** getDataset — ZIP as base64 in JSON */
  async getDataset(
    sessionId: number,
    accessKey: string,
    format?: DatasetFormat
  ) {
    return fetchDataset(sessionId, accessKey, this.apiKey, format);
  }

  /** getDatasetRaw — binary ZIP ArrayBuffer */
  async getDatasetRaw(
    sessionId: number,
    accessKey: string,
    format?: DatasetFormat
  ) {
    return fetchDatasetRaw(sessionId, accessKey, this.apiKey, format);
  }

  /** getDatasetList */
  async getDatasetList(state?: StateAbbreviation, year?: number) {
    return fetchDatasetList(this.apiKey, state, year);
  }

  // -------------
  // Monitor
  // -------------

  /** getMonitorList — record defaults to current */
  async getMonitorList(record: MonitorRecord = 'current') {
    return fetchMonitorList(this.apiKey, record);
  }

  /** getMonitorListRaw — record defaults to current */
  async getMonitorListRaw(record: MonitorRecord = 'current') {
    return fetchMonitorListRaw(this.apiKey, record);
  }

  /** setMonitor */
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
