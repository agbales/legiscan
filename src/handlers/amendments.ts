import { legiscanRequest } from '../request.js';
import { Amendment } from './types.js';

export const fetchAmendmentById = async (
  amendmentId: number,
  apiKey: string
): Promise<Amendment> => {
  const res = await legiscanRequest(apiKey, 'getAmendment', {
    id: amendmentId,
  });
  return res.amendment as Amendment;
};
