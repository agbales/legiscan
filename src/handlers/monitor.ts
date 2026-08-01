import { legiscanRequest } from '../request.js';
import {
  MonitorListRawResponse,
  MonitorListResponse,
  SetMonitorProps,
  SetMonitorResponse,
} from '../types.js';
import { MonitorRecord } from './types.js';

export const fetchMonitorList = async (
  apiKey: string,
  record: MonitorRecord = 'current'
): Promise<MonitorListResponse> => {
  const res = await legiscanRequest(apiKey, 'getMonitorList', { record });
  return res.monitorlist as MonitorListResponse;
};

export const fetchMonitorListRaw = async (
  apiKey: string,
  record: MonitorRecord = 'current'
): Promise<MonitorListRawResponse> => {
  const res = await legiscanRequest(apiKey, 'getMonitorListRaw', { record });
  return res.monitorlist as MonitorListRawResponse;
};

export const setMonitorByListAndAction = async ({
  list,
  action,
  stance = 'watch',
  apiKey,
}: SetMonitorProps): Promise<SetMonitorResponse> => {
  const res = await legiscanRequest(apiKey, 'setMonitor', {
    list,
    action,
    stance,
  });
  return res.return as SetMonitorResponse;
};
