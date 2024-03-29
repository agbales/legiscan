import { LEGISCAN_BASE_URL } from '../config.js';
import { BillText, LegiscanBill } from './types.js';

export const fetchBill = async (
  billId: number,
  apiKey: string
): Promise<LegiscanBill | undefined> => {
  const op = 'getBill';
  try {
    const res = await fetch(
      `${LEGISCAN_BASE_URL}/?key=${apiKey}&op=${op}&id=${billId}`
    ).then(res => res.json());
    return res.bill;
  } catch (error) {
    console.log('Error fetching', billId, 'error:', error);
    return undefined;
  }
};

export const fetchBills = async (
  billIds: number[],
  apiKey: string
): Promise<(LegiscanBill | undefined)[]> => {
  return await Promise.all(billIds.map(id => fetchBill(id, apiKey)));
};

export const fetchBillTextByDocId = async (
  doc_id: number,
  apiKey: string
): Promise<BillText | undefined> => {
  const op = 'getBillText';
  const fetchUrl = `${LEGISCAN_BASE_URL}/?key=${apiKey}&op=${op}&id=${doc_id}`;

  try {
    const res = await fetch(fetchUrl).then(res => res.json());
    return res.text;
  } catch (error) {
    console.error('Error fetching bill text', JSON.stringify(error));
    return undefined;
  }
};

export const fetchBillTextByBillId = async (
  billId: number,
  apiKey: string
): Promise<BillText | undefined> => {
  const billResponse = await fetchBill(billId, apiKey);

  const docId = billResponse?.texts[0]?.doc_id;

  if (!docId) {
    console.log('No doc available for ', billId);
    return;
  }

  const billText = fetchBillTextByDocId(docId, apiKey);

  return billText;
};
