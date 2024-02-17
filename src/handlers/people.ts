import { LEGISCAN_BASE_URL } from '../config.js';
import {
  Person,
  SessionPeopleResponse,
  SponsoredListResponse,
} from './types.js';

export const fetchPersonById = async (
  peopleId: number,
  apiKey: string
): Promise<Person | undefined> => {
  const op = 'getPerson';

  try {
    const res = await fetch(
      `${LEGISCAN_BASE_URL}/?key=${apiKey}&op=${op}&id=${peopleId}`
    ).then(res => res.json());
    return res.person;
  } catch (error) {
    console.log('Error fetching', peopleId, 'error:', error);
    return undefined;
  }
};

export const fetchPeopleBySessionId = async (
  sessionId: number,
  apiKey: string
): Promise<SessionPeopleResponse | undefined> => {
  const op = 'getSessionPeople';

  try {
    const res = await fetch(
      `${LEGISCAN_BASE_URL}/?key=${apiKey}&op=${op}&id=${sessionId}`
    ).then(res => res.json());
    return res.sessionpeople;
  } catch (error) {
    console.log('Error fetching', sessionId, 'error:', error);
    return undefined;
  }
};

export const fetchPersonWithSponsoredBillsById = async (
  peopleId: number,
  apiKey: string
): Promise<SponsoredListResponse | undefined> => {
  const op = 'getSponsoredList';

  try {
    const res = await fetch(
      `${LEGISCAN_BASE_URL}/?key=${apiKey}&op=${op}&id=${peopleId}`
    ).then(res => res.json());
    return res.sponsoredbills;
  } catch (error) {
    console.log('Error fetching', peopleId, 'error:', error);
    return undefined;
  }
};
