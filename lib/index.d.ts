import { SearchAllParams, SearchParams } from './types.js';
export declare class Legiscan {
    private apiKey;
    constructor(apiKey: string);
    search({ query, page, year, state, id }: SearchParams): Promise<import("./handlers/types.js").SearchResponse | undefined>;
    searchAllResults({ query, year, state, id }: SearchAllParams): Promise<import("./handlers/types.js").SearchResult[]>;
    getSearchRaw({ query, page, year, state, id }: SearchParams): Promise<import("./handlers/types.js").SearchResponse | undefined>;
    getBill(billId: number): Promise<import("./handlers/types.js").LegiscanBill | undefined>;
    getBills(billIds: number[]): Promise<(import("./handlers/types.js").LegiscanBill | undefined)[]>;
    getBillTextByBillId(billId: number): Promise<import("./handlers/types.js").BillText | undefined>;
    getBillTextByDocId(docId: number): Promise<import("./handlers/types.js").BillText | undefined>;
    getMasterListByState(state: string): Promise<any>;
    getMasterListByStateRaw(state: string): Promise<any>;
    getMasterListBySessionId(sessionId: number): Promise<any>;
    getMasterListBySessionIdRaw(sessionId: number): Promise<any>;
}
