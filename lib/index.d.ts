import { MonitorAction, MonitorStance, SearchAllParams, SearchParams } from './types.js';
import { DatasetFormat, MonitorRecord, StateAbbreviation } from './handlers/types.js';
export { LegiscanError } from './request.js';
export type { Amendment, BillText, Dataset, DatasetFormat, DatasetListItem, LegiscanBill, MasterList, MasterListItem, MasterListRaw, MasterListRawItem, MonitorRecord, Person, ProgressEvent, RollCall, SearchRawResponse, SearchRawResult, SearchResponse, SearchResult, Session, SessionPeopleResponse, SponsoredListResponse, State, StateAbbreviation, Supplement, } from './handlers/types.js';
export type { MonitorAction, MonitorListRawResponse, MonitorListResponse, MonitorStance, SearchAllParams, SearchParams, SetMonitorResponse, } from './types.js';
export declare class Legiscan {
    private apiKey;
    constructor(apiKey: string);
    /** getSearch — full text search, 50 results per page */
    search({ query, page, year, state, sessionId }: SearchParams): Promise<import("./types.js").SearchResponse>;
    /** Convenience: pages through getSearch until exhausted */
    searchAllResults({ query, year, state, sessionId }: SearchAllParams): Promise<import("./types.js").SearchResult[]>;
    /** getSearchRaw — up to 2000 abbreviated results per page */
    getSearchRaw({ query, page, year, state, sessionId }: SearchParams): Promise<import("./types.js").SearchRawResponse>;
    /** getBill */
    getBill(billId: number): Promise<import("./handlers/types.js").LegiscanBill>;
    /** Convenience batch over getBill */
    getBills(billIds: number[]): Promise<import("./handlers/types.js").LegiscanBill[]>;
    /**
     * Convenience: getBill then getBillText for the latest text.
     * Prefer getBillText / getBillTextByDocId when you already have a doc_id.
     */
    getBillTextByBillId(billId: number): Promise<import("./handlers/types.js").BillText | undefined>;
    /** getBillText */
    getBillText(docId: number): Promise<import("./handlers/types.js").BillText>;
    /** Alias for getBillText */
    getBillTextByDocId(docId: number): Promise<import("./handlers/types.js").BillText>;
    /** getMasterList by state (current session) */
    getMasterListByState(state: StateAbbreviation): Promise<import("./handlers/types.js").MasterList>;
    /** getMasterListRaw by state */
    getMasterListByStateRaw(state: StateAbbreviation): Promise<import("./handlers/types.js").MasterListRaw>;
    /** getMasterList by session id */
    getMasterListBySessionId(sessionId: number): Promise<import("./handlers/types.js").MasterList>;
    /** getMasterListRaw by session id */
    getMasterListBySessionIdRaw(sessionId: number): Promise<import("./handlers/types.js").MasterListRaw>;
    /** getAmendment */
    getAmendment(amendmentId: number): Promise<import("./handlers/types.js").Amendment>;
    /** Alias for getAmendment */
    getAmendmentById(amendmentId: number): Promise<import("./handlers/types.js").Amendment>;
    /** getSessionList — omit state for all sessions */
    getSessionList(state?: StateAbbreviation): Promise<import("./handlers/types.js").Session[]>;
    /** Alias for getSessionList */
    getSessionListByState(state?: StateAbbreviation): Promise<import("./handlers/types.js").Session[]>;
    /** getSupplement */
    getSupplement(supplementId: number): Promise<import("./handlers/types.js").Supplement>;
    /** Alias for getSupplement */
    getSupplementById(supplementId: number): Promise<import("./handlers/types.js").Supplement>;
    /** getRollCall */
    getRollCall(rollCallId: number): Promise<import("./handlers/types.js").RollCall>;
    /** Alias for getRollCall */
    getRollCallById(rollCallId: number): Promise<import("./handlers/types.js").RollCall>;
    /** getPerson */
    getPerson(peopleId: number): Promise<import("./handlers/types.js").Person>;
    /** Alias for getPerson */
    getPersonById(peopleId: number): Promise<import("./handlers/types.js").Person>;
    /** getSessionPeople */
    getSessionPeople(sessionId: number): Promise<import("./handlers/types.js").SessionPeopleResponse>;
    /** getSponsoredList */
    getSponsoredList(peopleId: number): Promise<import("./handlers/types.js").SponsoredListResponse>;
    /** Alias for getSponsoredList */
    getPersonWithSponsoredBillsById(peopleId: number): Promise<import("./handlers/types.js").SponsoredListResponse>;
    /** getDataset — ZIP as base64 in JSON */
    getDataset(sessionId: number, accessKey: string, format?: DatasetFormat): Promise<import("./types.js").Dataset>;
    /** getDatasetRaw — binary ZIP ArrayBuffer */
    getDatasetRaw(sessionId: number, accessKey: string, format?: DatasetFormat): Promise<ArrayBuffer>;
    /** getDatasetList */
    getDatasetList(state?: StateAbbreviation, year?: number): Promise<import("./types.js").DatasetListItem[]>;
    /** getMonitorList — record defaults to current */
    getMonitorList(record?: MonitorRecord): Promise<import("./types.js").MonitorListResponse>;
    /** getMonitorListRaw — record defaults to current */
    getMonitorListRaw(record?: MonitorRecord): Promise<import("./types.js").MonitorListRawResponse>;
    /** setMonitor */
    setMonitor(list: string, action: MonitorAction, stance?: MonitorStance): Promise<import("./types.js").SetMonitorResponse>;
}
