import { LEGISCAN_BASE_URL } from '../config.js';
import { Person } from './types.js';

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
