import { LEGISCAN_BASE_URL } from '../config.js';
import { Supplement } from './types.js';

export const fetchSupplementById = async (
  supplementId: number,
  apiKey: string
): Promise<Supplement | undefined> => {
  const op = 'getSupplement';

  try {
    const res = await fetch(
      `${LEGISCAN_BASE_URL}/?key=${apiKey}&op=${op}&id=${supplementId}`
    ).then(res => res.json());
    return res.supplement;
  } catch (error) {
    console.log('Error fetching', supplementId, 'error:', error);
    return undefined;
  }
};
