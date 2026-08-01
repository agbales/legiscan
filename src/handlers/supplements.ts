import { legiscanRequest } from '../request.js';
import { Supplement } from './types.js';

export const fetchSupplementById = async (
  supplementId: number,
  apiKey: string
): Promise<Supplement> => {
  const res = await legiscanRequest(apiKey, 'getSupplement', {
    id: supplementId,
  });
  return res.supplement as Supplement;
};
