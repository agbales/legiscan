import { State } from './handlers/types.js';

export type SearchParams = {
  query: string;
  page?: number;
  year?: number;
  state?: State;
  sessionId?: number;
};

export type MonitorAction = 'monitor' | 'remove' | 'set';

export type MonitorStance = 'watch' | 'support' | 'oppose';

export type MonitorListResponse = {
  [key: string]: {
    bill_id: number;
    state: string;
    number: string;
    stance: number;
    change_hash: string;
    url: string;
    status_date: string;
    status: number;
    last_action_date: string;
    last_action: string;
    title: string;
    description: string;
  };
};

export type MonitorListRawResponse = {
  [key: string]: {
    bill_id: number;
    state: string;
    number: string;
    stance: number;
    change_hash: string;
    status: number;
  };
};

export type SetMonitorProps = {
  list: string;
  action: MonitorAction;
  stance?: MonitorStance;
  apiKey: string;
};

export type SetMonitorResponse = {
  [key: string]: string;
};

export type SearchAllParams = SearchParams & { page?: never };
