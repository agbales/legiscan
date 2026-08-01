import { legiscanRequest } from '../request.js';
import { Session } from './types.js';

export const fetchSessionListByState = async (
  apiKey: string,
  state?: string
): Promise<Session[]> => {
  const res = await legiscanRequest(apiKey, 'getSessionList', { state });
  return res.sessions as Session[];
};
