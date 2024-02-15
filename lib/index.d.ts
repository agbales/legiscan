import { State } from './handlers/types.js';
export declare class Legiscan {
    private apiKey;
    constructor(apiKey: string);
    search(query: string, page?: number, year?: number, state?: State, id?: number): Promise<import("./handlers/types.js").SearchResponse | undefined>;
    searchAllResults(query: string, year?: number, state?: State, id?: number): Promise<import("./handlers/types.js").SearchResult[]>;
    getSearchRaw(query: string, page?: number, year?: number, state?: State, id?: number): Promise<import("./handlers/types.js").SearchResponse | undefined>;
    getBill(billId: number): Promise<import("./handlers/types.js").LegiscanBill | undefined>;
    getBills(billIds: number[]): Promise<(import("./handlers/types.js").LegiscanBill | undefined)[]>;
    getBillTextByBillId(billId: number): Promise<import("./handlers/types.js").BillText | undefined>;
    getBillTextByDocId(docId: number): Promise<import("./handlers/types.js").BillText | undefined>;
    getMasterListByState(state: string): Promise<any>;
}
