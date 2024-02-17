import { LEGISCAN_BASE_URL } from '../config.js';
import { Dataset } from './types.js';

export const fetchDataset = async (
  sessionId: number,
  accessKey: string,
  apiKey: string
): Promise<Dataset | undefined> => {
  const op = 'getDataset';

  try {
    const res = await fetch(
      `${LEGISCAN_BASE_URL}/?key=${apiKey}&op=${op}&id=${sessionId}&access_key=${accessKey}`
    ).then(res => res.json());
    return res.dataset;
  } catch (error) {
    console.log('Error fetching', sessionId, 'error:', error);
    return undefined;
  }
};
