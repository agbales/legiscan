import { SearchResponse, SearchResult } from './types.js';
export declare const fetchSearch: (query: string, apiKey: string, page?: number, year?: number, state?: string, sessionId?: number) => Promise<SearchResponse | undefined>;
export declare const searchAllPages: (query: string, apiKey: string, year?: number, state?: string, sessionId?: number) => Promise<SearchResult[]>;
export declare const fetchSearchRaw: (query: string, apiKey: string, page?: number, year?: number, state?: string, sessionId?: number) => Promise<SearchResponse | undefined>;
