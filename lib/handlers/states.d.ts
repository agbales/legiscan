import { State, StateAbbreviation } from './types.js';
export declare const states: StateAbbreviation[];
/** Map a full jurisdiction name to a LegiScan state abbreviation. */
export declare const getStateAbbreviation: (stateName: string) => State | undefined;
