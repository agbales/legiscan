import { State } from './handlers/types.js';
export declare class Legiscan {
    private apiKey;
    constructor(apiKey: string);
    search(query: string, page?: number, state?: State): Promise<import("./handlers/types.js").SearchResponse | undefined>;
    searchAllResults(query: string, state?: State): Promise<import("./handlers/types.js").SearchResult[]>;
    getBill(billId: number): Promise<import("./handlers/types.js").LegiscanBill | undefined>;
    getBills(billIds: number[]): Promise<(import("./handlers/types.js").LegiscanBill | undefined)[]>;
    getBillTextByBillId(billId: number): Promise<import("./handlers/types.js").BillText | undefined>;
    getBillTextByDocId(docId: number): Promise<import("./handlers/types.js").BillText | undefined>;
    getMasterListByState(state: string): Promise<any>;
}
