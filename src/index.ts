import {
  fetchBill,
  fetchBillTextByBillId,
  fetchBillTextByDocId,
  fetchBills,
  fetchMasterListByState,
  searchWithPagination,
} from './handlers/index.js';

export class Legiscan {
  private apiKey: string;

  constructor(apiKey: string) {
    this.apiKey = apiKey;
  }

  async search(query: string, state?: string) {
    return searchWithPagination(query, this.apiKey, state);
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
