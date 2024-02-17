import { MonitorListRawResponse, MonitorListResponse, SetMonitorProps, SetMonitorResponse } from '../types.js';
export declare const fetchMonitorList: (record: string, apiKey: string) => Promise<MonitorListResponse | undefined>;
export declare const fetchMonitorListRaw: (record: string, apiKey: string) => Promise<MonitorListRawResponse | undefined>;
export declare const setMonitorByListAndAction: ({ list, action, stance, apiKey, }: SetMonitorProps) => Promise<SetMonitorResponse | undefined>;
