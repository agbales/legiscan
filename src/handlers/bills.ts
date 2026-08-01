import { legiscanRequest } from '../request.js';
import { BillText, LegiscanBill } from './types.js';

export const fetchBill = async (
  billId: number,
  apiKey: string
): Promise<LegiscanBill> => {
  const res = await legiscanRequest(apiKey, 'getBill', { id: billId });
  return res.bill as LegiscanBill;
};

export const fetchBills = async (
  billIds: number[],
  apiKey: string
): Promise<LegiscanBill[]> => {
  return Promise.all(billIds.map(id => fetchBill(id, apiKey)));
};

export const fetchBillTextByDocId = async (
  docId: number,
  apiKey: string
): Promise<BillText> => {
  const res = await legiscanRequest(apiKey, 'getBillText', { id: docId });
  return res.text as BillText;
};

export const fetchBillTextByBillId = async (
  billId: number,
  apiKey: string
): Promise<BillText | undefined> => {
  const bill = await fetchBill(billId, apiKey);
  const texts = bill.texts ?? [];
  const docId = texts[texts.length - 1]?.doc_id;

  if (!docId) {
    return undefined;
  }

  return fetchBillTextByDocId(docId, apiKey);
};
