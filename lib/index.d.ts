import { MonitorAction, MonitorStance, SearchAllParams, SearchParams } from './types.js';
import { State } from './handlers/types.js';
export declare class Legiscan {
    private apiKey;
    constructor(apiKey: string);
    search({ query, page, year, state, sessionId }: SearchParams): Promise<import("./handlers/types.js").SearchResponse | undefined>;
    searchAllResults({ query, year, state, sessionId }: SearchAllParams): Promise<import("./handlers/types.js").SearchResult[]>;
    getSearchRaw({ query, page, year, state, sessionId }: SearchParams): Promise<import("./handlers/types.js").SearchResponse | undefined>;
    getBill(billId: number): Promise<import("./handlers/types.js").LegiscanBill | undefined>;
    getBills(billIds: number[]): Promise<(import("./handlers/types.js").LegiscanBill | undefined)[]>;
    getBillTextByBillId(billId: number): Promise<import("./handlers/types.js").BillText | undefined>;
    getBillTextByDocId(docId: number): Promise<import("./handlers/types.js").BillText | undefined>;
    getMasterListByState(state: State): Promise<import("./handlers/types.js").MasterList[] | undefined>;
    getMasterListByStateRaw(state: State): Promise<import("./handlers/types.js").MasterListRaw[] | undefined>;
    getMasterListBySessionId(sessionId: number): Promise<import("./handlers/types.js").MasterList[] | undefined>;
    getMasterListBySessionIdRaw(sessionId: number): Promise<import("./handlers/types.js").MasterListRaw[] | undefined>;
    getAmendmentById(amendmentId: number): Promise<import("./handlers/types.js").Amendment[] | undefined>;
    getSessionListByState(state: State): Promise<import("./handlers/types.js").Session[] | undefined>;
    getSupplementById(supplementId: number): Promise<import("./handlers/types.js").Supplement | undefined>;
    getRollCallById(rollCallId: number): Promise<import("./handlers/types.js").RollCall | undefined>;
    getPersonById(peopleId: number): Promise<import("./handlers/types.js").Person | undefined>;
    getSessionPeople(sessionId: number): Promise<import("./handlers/types.js").SessionPeopleResponse | undefined>;
    getPersonWithSponsoredBillsById(peopleId: number): Promise<import("./handlers/types.js").SponsoredListResponse | undefined>;
    getDataset(sessionId: number, accessKey: string): Promise<import("./handlers/types.js").Dataset | undefined>;
    getDatasetList(state?: State, year?: number): Promise<import("./handlers/types.js").Dataset[] | undefined>;
    getMonitorList(record: string): Promise<import("./types.js").MonitorListResponse | undefined>;
    getMonitorListRaw(record: string): Promise<import("./types.js").MonitorListRawResponse | undefined>;
    setMonitor(list: string, action: MonitorAction, stance?: MonitorStance): Promise<import("./types.js").SetMonitorResponse | undefined>;
}
