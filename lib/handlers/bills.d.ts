import { BillText, LegiscanBill } from './types.js';
export declare const fetchBill: (billId: number, apiKey: string) => Promise<LegiscanBill | undefined>;
export declare const fetchBills: (billIds: number[], apiKey: string) => Promise<(LegiscanBill | undefined)[]>;
export declare const fetchBillTextByDocId: (doc_id: number, apiKey: string) => Promise<BillText | undefined>;
export declare const fetchBillTextByBillId: (billId: number, apiKey: string) => Promise<BillText | undefined>;
