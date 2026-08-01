import { legiscanRequest } from '../request.js';
import {
  Person,
  SessionPeopleResponse,
  SponsoredListResponse,
} from './types.js';

export const fetchPersonById = async (
  peopleId: number,
  apiKey: string
): Promise<Person> => {
  const res = await legiscanRequest(apiKey, 'getPerson', { id: peopleId });
  return res.person as Person;
};

export const fetchPeopleBySessionId = async (
  sessionId: number,
  apiKey: string
): Promise<SessionPeopleResponse> => {
  const res = await legiscanRequest(apiKey, 'getSessionPeople', {
    id: sessionId,
  });
  return res.sessionpeople as SessionPeopleResponse;
};

export const fetchPersonWithSponsoredBillsById = async (
  peopleId: number,
  apiKey: string
): Promise<SponsoredListResponse> => {
  const res = await legiscanRequest(apiKey, 'getSponsoredList', {
    id: peopleId,
  });
  return res.sponsoredbills as SponsoredListResponse;
};
