import { LEGISCAN_BASE_URL } from '../config.js';
import { MasterList, MasterListRaw } from './types.js';

export const fetchMasterListByState = async (
  state: string,
  apiKey: string
): Promise<MasterList[] | undefined> => {
  const op = 'getMasterList';
  try {
    const res = await fetch(
      `${LEGISCAN_BASE_URL}/?key=${apiKey}&op=${op}&state=${state}`
    ).then(res => res.json());
    return res.masterlist;
  } catch (error) {
    console.log('Error fetching', state, 'error:', error);
    return undefined;
  }
};

export const fetchMasterListByStateRaw = async (
  state: string,
  apiKey: string
): Promise<MasterListRaw[] | undefined> => {
  const op = 'getMasterListRaw';
  try {
    const res = await fetch(
      `${LEGISCAN_BASE_URL}/?key=${apiKey}&op=${op}&state=${state}`
    ).then(res => res.json());
    return res.masterlist;
  } catch (error) {
    console.log('Error fetching', state, 'error:', error);
    return undefined;
  }
};

export const fetchMasterListBySessionId = async (
  sessionId: number,
  apiKey: string
): Promise<MasterList[] | undefined> => {
  const op = 'getMasterList';
  try {
    const res = await fetch(
      `${LEGISCAN_BASE_URL}/?key=${apiKey}&op=${op}&id=${sessionId}`
    ).then(res => res.json());
    return res.masterlist;
  } catch (error) {
    console.log('Error fetching', sessionId, 'error:', error);
    return undefined;
  }
};

export const fetchMasterListBySessionIdRaw = async (
  sessionId: number,
  apiKey: string
): Promise<MasterListRaw[] | undefined> => {
  const op = 'getMasterList';
  try {
    const res = await fetch(
      `${LEGISCAN_BASE_URL}/?key=${apiKey}&op=${op}&id=${sessionId}`
    ).then(res => res.json());
    return res.masterlist;
  } catch (error) {
    console.log('Error fetching', sessionId, 'error:', error);
    return undefined;
  }
};
