import {
  fetchBill,
  fetchBillTextByBillId,
  fetchBillTextByDocId,
  fetchBills,
  fetchMasterListByState,
  fetchSearch,
  fetchSearchRaw,
  searchAllPages,
} from './handlers/index.js';
import { State } from './handlers/types.js';

export class Legiscan {
  private apiKey: string;

  constructor(apiKey: string) {
    this.apiKey = apiKey;
  }

  async search(query: string, page?: number, year?: number, state?: State, id?: number) {
    return fetchSearch(query, this.apiKey, page, year, state, id);
  }

  async searchAllResults(query: string, year?: number, state?: State, id?: number) {
    return searchAllPages(query, this.apiKey, year, state, id);
  }

  async getSearchRaw(query: string, page?: number, year?: number, state?: State, id?: number) {
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
