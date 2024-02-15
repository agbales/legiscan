export declare class Legiscan {
    private apiKey;
    constructor(apiKey: string);
    search(query: string, state?: string): Promise<import("./handlers/types.js").SearchResult[]>;
    getBill(billId: number): Promise<import("./handlers/types.js").LegiscanBill | undefined>;
    getBills(billIds: number[]): Promise<(import("./handlers/types.js").LegiscanBill | undefined)[]>;
    getBillTextByBillId(billId: number): Promise<import("./handlers/types.js").BillText | undefined>;
    getBillTextByDocId(docId: number): Promise<import("./handlers/types.js").BillText | undefined>;
    getMasterListByState(state: string): Promise<any>;
}
