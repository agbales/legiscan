import { State } from './handlers/types.js';

export type SearchParams = {
  query: string;
  page?: number;
  year?: number;
  state?: State;
  id?: number;
};

export type SearchAllParams = SearchParams & { page?: never };
