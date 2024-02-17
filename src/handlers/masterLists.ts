import { LEGISCAN_BASE_URL } from '../config.js';

export const fetchMasterListByState = async (state: string, apiKey: string) => {
  const op = 'getMasterList';
  try {
    const stateMasterList = await fetch(
      `${LEGISCAN_BASE_URL}/?key=${apiKey}&op=${op}&state=${state}`
    ).then(res => res.json());
    return stateMasterList;
  } catch (error) {
    console.log('Error fetching', state, 'error:', error);
    return undefined;
  }
};

export const fetchMasterListByStateRaw = async (
  state: string,
  apiKey: string
) => {
  const op = 'getMasterListRaw';
  try {
    const stateMasterList = await fetch(
      `${LEGISCAN_BASE_URL}/?key=${apiKey}&op=${op}&state=${state}`
    ).then(res => res.json());
    return stateMasterList;
  } catch (error) {
    console.log('Error fetching', state, 'error:', error);
    return undefined;
  }
};

export const fetchMasterListBySessionId = async (
  sessionId: number,
  apiKey: string
) => {
  const op = 'getMasterList';
  try {
    const sessionMasterList = await fetch(
      `${LEGISCAN_BASE_URL}/?key=${apiKey}&op=${op}&id=${sessionId}`
    ).then(res => res.json());
    return sessionMasterList;
  } catch (error) {
    console.log('Error fetching', sessionId, 'error:', error);
    return undefined;
  }
};

export const fetchMasterListBySessionIdRaw = async (
  sessionId: number,
  apiKey: string
) => {
  const op = 'getMasterList';
  try {
    const sessionMasterList = await fetch(
      `${LEGISCAN_BASE_URL}/?key=${apiKey}&op=${op}&id=${sessionId}`
    ).then(res => res.json());
    return sessionMasterList;
  } catch (error) {
    console.log('Error fetching', sessionId, 'error:', error);
    return undefined;
  }
};
