import { MasterList, MasterListRaw } from './types.js';
export declare const fetchMasterListByState: (state: string, apiKey: string) => Promise<MasterList>;
export declare const fetchMasterListByStateRaw: (state: string, apiKey: string) => Promise<MasterListRaw>;
export declare const fetchMasterListBySessionId: (sessionId: number, apiKey: string) => Promise<MasterList>;
export declare const fetchMasterListBySessionIdRaw: (sessionId: number, apiKey: string) => Promise<MasterListRaw>;
