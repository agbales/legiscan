import { LEGISCAN_BASE_URL } from '../config.js';
import { RollCall } from './types.js';

export const fetchRollCallById = async (
  rollCallId: number,
  apiKey: string
): Promise<RollCall | undefined> => {
  const op = 'getRollCall';

  try {
    const res = await fetch(
      `${LEGISCAN_BASE_URL}/?key=${apiKey}&op=${op}&id=${rollCallId}`
    ).then(res => res.json());
    return res.roll_call;
  } catch (error) {
    console.log('Error fetching', rollCallId, 'error:', error);
    return undefined;
  }
};
