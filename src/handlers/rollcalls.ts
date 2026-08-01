import { legiscanRequest } from '../request.js';
import { RollCall } from './types.js';

export const fetchRollCallById = async (
  rollCallId: number,
  apiKey: string
): Promise<RollCall> => {
  const res = await legiscanRequest(apiKey, 'getRollCall', { id: rollCallId });
  return res.roll_call as RollCall;
};
