import { legiscanRequest } from '../request.js';
import { MasterList, MasterListRaw } from './types.js';

export const fetchMasterListByState = async (
  state: string,
  apiKey: string
): Promise<MasterList> => {
  const res = await legiscanRequest(apiKey, 'getMasterList', { state });
  return res.masterlist as MasterList;
};

export const fetchMasterListByStateRaw = async (
  state: string,
  apiKey: string
): Promise<MasterListRaw> => {
  const res = await legiscanRequest(apiKey, 'getMasterListRaw', { state });
  return res.masterlist as MasterListRaw;
};

export const fetchMasterListBySessionId = async (
  sessionId: number,
  apiKey: string
): Promise<MasterList> => {
  const res = await legiscanRequest(apiKey, 'getMasterList', { id: sessionId });
  return res.masterlist as MasterList;
};

export const fetchMasterListBySessionIdRaw = async (
  sessionId: number,
  apiKey: string
): Promise<MasterListRaw> => {
  const res = await legiscanRequest(apiKey, 'getMasterListRaw', {
    id: sessionId,
  });
  return res.masterlist as MasterListRaw;
};
