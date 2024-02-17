import { MasterList, MasterListRaw } from './types.js';
export declare const fetchMasterListByState: (state: string, apiKey: string) => Promise<MasterList[] | undefined>;
export declare const fetchMasterListByStateRaw: (state: string, apiKey: string) => Promise<MasterListRaw[] | undefined>;
export declare const fetchMasterListBySessionId: (sessionId: number, apiKey: string) => Promise<MasterList[] | undefined>;
export declare const fetchMasterListBySessionIdRaw: (sessionId: number, apiKey: string) => Promise<MasterListRaw[] | undefined>;
