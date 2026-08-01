import { MonitorListRawResponse, MonitorListResponse, SetMonitorProps, SetMonitorResponse } from '../types.js';
import { MonitorRecord } from './types.js';
export declare const fetchMonitorList: (apiKey: string, record?: MonitorRecord) => Promise<MonitorListResponse>;
export declare const fetchMonitorListRaw: (apiKey: string, record?: MonitorRecord) => Promise<MonitorListRawResponse>;
export declare const setMonitorByListAndAction: ({ list, action, stance, apiKey, }: SetMonitorProps) => Promise<SetMonitorResponse>;
