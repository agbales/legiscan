import { BillText, LegiscanBill, SearchResponse, SearchResult } from './types';
export declare const fetchBill: (billId: number, apiKey: string) => Promise<LegiscanBill | undefined>;
export declare const fetchBills: (billIds: number[], apiKey: string) => Promise<(LegiscanBill | undefined)[]>;
export declare const fetchMasterListByState: (state: string, apiKey: string) => Promise<any>;
export declare const fetchSearch: (query: string, apiKey: string, page?: number, year?: number, state?: string, sessionId?: number) => Promise<SearchResponse | undefined>;
export declare const searchAllPages: (query: string, apiKey: string, year?: number, state?: string, sessionId?: number) => Promise<SearchResult[]>;
export declare const fetchSearchRaw: (query: string, apiKey: string, page?: number, year?: number, state?: string, sessionId?: number) => Promise<SearchResponse | undefined>;
export declare const fetchBillTextByDocId: (doc_id: number, apiKey: string) => Promise<BillText | undefined>;
export declare const fetchBillTextByBillId: (billId: number, apiKey: string) => Promise<BillText | undefined>;
