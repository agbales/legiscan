import { Person, SessionPeopleResponse, SponsoredListResponse } from './types.js';
export declare const fetchPersonById: (peopleId: number, apiKey: string) => Promise<Person | undefined>;
export declare const fetchPeopleBySessionId: (sessionId: number, apiKey: string) => Promise<SessionPeopleResponse | undefined>;
export declare const fetchPersonWithSponsoredBillsById: (peopleId: number, apiKey: string) => Promise<SponsoredListResponse | undefined>;
