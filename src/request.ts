import { LEGISCAN_BASE_URL } from './config.js';

export class LegiscanError extends Error {
  readonly alert?: string;
  readonly op: string;

  constructor(op: string, alert?: string) {
    super(alert ?? `LegiScan API error for ${op}`);
    this.name = 'LegiscanError';
    this.op = op;
    this.alert = alert;
  }
}

export type LegiscanApiResponse = {
  status: 'OK' | 'ERROR';
  alert?: string;
  [key: string]: unknown;
};

type RequestParams = Record<string, string | number | undefined>;

function buildUrl(apiKey: string, op: string, params: RequestParams = {}): string {
  const searchParams = new URLSearchParams({ key: apiKey, op });

  for (const [key, value] of Object.entries(params)) {
    if (value !== undefined && value !== '') {
      searchParams.set(key, String(value));
    }
  }

  return `${LEGISCAN_BASE_URL}/?${searchParams.toString()}`;
}

export async function legiscanRequest(
  apiKey: string,
  op: string,
  params: RequestParams = {}
): Promise<LegiscanApiResponse> {
  const res = await fetch(buildUrl(apiKey, op, params));
  const data = (await res.json()) as LegiscanApiResponse;

  if (data.status === 'ERROR') {
    throw new LegiscanError(op, data.alert);
  }

  return data;
}

/** getDatasetRaw returns a binary ZIP stream (or JSON error). */
export async function legiscanRequestBinary(
  apiKey: string,
  op: string,
  params: RequestParams = {}
): Promise<ArrayBuffer> {
  const res = await fetch(buildUrl(apiKey, op, params));
  const contentType = res.headers.get('content-type') ?? '';

  if (contentType.includes('application/json')) {
    const data = (await res.json()) as LegiscanApiResponse;
    if (data.status === 'ERROR') {
      throw new LegiscanError(op, data.alert);
    }
    throw new LegiscanError(op, 'Expected binary response from LegiScan');
  }

  if (!res.ok) {
    throw new LegiscanError(op, `HTTP ${res.status}`);
  }

  return res.arrayBuffer();
}
