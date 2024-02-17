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

import { SearchAllParams, SearchParams } from './types.js';

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

  async getMasterListByState(state: string) {
    return fetchMasterListByState(state, this.apiKey);
  }

  async getMasterListByStateRaw(state: string) {
    return fetchMasterListByStateRaw(state, this.apiKey);
  }

  async getMasterListBySessionId(sessionId: number) {
    return fetchMasterListBySessionId(sessionId, this.apiKey);
  }

  async getMasterListBySessionIdRaw(sessionId: number) {
    return fetchMasterListBySessionIdRaw(sessionId, this.apiKey);
  }
}
