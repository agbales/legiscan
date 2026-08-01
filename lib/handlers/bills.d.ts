import { BillText, LegiscanBill } from './types.js';
export declare const fetchBill: (billId: number, apiKey: string) => Promise<LegiscanBill>;
export declare const fetchBills: (billIds: number[], apiKey: string) => Promise<LegiscanBill[]>;
export declare const fetchBillTextByDocId: (docId: number, apiKey: string) => Promise<BillText>;
export declare const fetchBillTextByBillId: (billId: number, apiKey: string) => Promise<BillText | undefined>;
