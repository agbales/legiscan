import { LEGISCAN_BASE_URL } from '../config.js';
import { Session } from './types.js';

export const fetchSessionListByState = async (
  state: string = 'ALL',
  apiKey: string
): Promise<Session[] | undefined> => {
  const op = 'getSessionList';

  try {
    const res = await fetch(
      `${LEGISCAN_BASE_URL}/?key=${apiKey}&op=${op}&state=${state}`
    ).then(res => res.json());
    return res.sessions;
  } catch (error) {
    console.log('Error fetching', state, 'error:', error);
    return undefined;
  }
};
