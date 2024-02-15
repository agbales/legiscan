import {
  fetchBill,
  fetchBillTextByBillId,
  fetchBillTextByDocId,
  fetchBills,
  fetchMasterListByState,
  fetchSearch,
  searchAllPages,
} from './handlers/index.js';
import { State } from './handlers/types.js';

export class Legiscan {
  private apiKey: string;

  constructor(apiKey: string) {
    this.apiKey = apiKey;
  }

  async search(query: string, page?: number, state?: State) {
    return fetchSearch(query, this.apiKey, page, state);
  }

  async searchAllResults(query: string, state?: State) {
    return searchAllPages(query, this.apiKey, state);
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
