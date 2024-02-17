import { Session } from './types.js';
export declare const fetchSessionListByState: (state: string | undefined, apiKey: string) => Promise<Session[] | undefined>;
