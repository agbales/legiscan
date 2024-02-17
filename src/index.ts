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
import { SearchAllParams, SearchParams } from './types.js';
import { fetchSessionListByState } from './handlers/sessions.js';
import { fetchSupplementById } from './handlers/supplements.js';
import { fetchRollCallById } from './handlers/rollcalls.js';
import { State } from './handlers/types.js';
import { fetchPeopleBySessionId, fetchPersonById } from './handlers/people.js';

export class Legiscan {
  private apiKey: string;

  constructor(apiKey: string) {
    this.apiKey = apiKey;
  }

  // -------------
  // Search
  // -------------

  async search({ query, page, year, state, id }: SearchParams) {
    return fetchSearch(query, this.apiKey, page, year, state, id);
  }

  async searchAllResults({ query, year, state, id }: SearchAllParams) {
    return searchAllPages(query, this.apiKey, year, state, id);
  }

  async getSearchRaw({ query, page, year, state, id }: SearchParams) {
    return fetchSearchRaw(query, this.apiKey, page, year, state, id);
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
}
