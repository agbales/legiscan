import {
  fetchBill,
  fetchBillTextByBillId,
  fetchBillTextByDocId,
  fetchBills,
  fetchMasterListByState,
} from './handlers/index.js';
import {
  fetchSearch,
  fetchSearchRaw,
  searchAllPages,
} from './handlers/search.js';
import { SearchAllParams, SearchParams } from './types.js';

export class Legiscan {
  private apiKey: string;

  constructor(apiKey: string) {
    this.apiKey = apiKey;
  }

  async search({ query, page, year, state, id }: SearchParams) {
    return fetchSearch(query, this.apiKey, page, year, state, id);
  }

  async searchAllResults({ query, year, state, id }: SearchAllParams) {
    return searchAllPages(query, this.apiKey, year, state, id);
  }

  async getSearchRaw({ query, page, year, state, id }: SearchParams) {
    return fetchSearchRaw(query, this.apiKey, page, year, state, id);
  }

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

  async getMasterListByState(state: string) {
    return fetchMasterListByState(state, this.apiKey);
  }
}
