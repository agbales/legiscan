import { BillText, LegiscanBill, SearchResult } from './types';
export declare const fetchBill: (billId: number, apiKey: string) => Promise<LegiscanBill | undefined>;
export declare const fetchBills: (billIds: number[], apiKey: string) => Promise<(LegiscanBill | undefined)[]>;
export declare const fetchMasterListByState: (state: string, apiKey: string) => Promise<any>;
export declare const searchWithPagination: (query: string, apiKey: string, state?: string) => Promise<SearchResult[]>;
export declare const fetchBillTextByDocId: (doc_id: number, apiKey: string) => Promise<BillText | undefined>;
export declare const fetchBillTextByBillId: (billId: number, apiKey: string) => Promise<BillText | undefined>;
