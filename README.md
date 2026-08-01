# Legiscan

A TypeScript client for the [LegiScan API](https://legiscan.com/legiscan) — search bills, fetch texts and amendments, look up legislators and roll calls, pull session datasets, and manage monitors, with typed methods for the full API surface documented in the [LegiScan manual](https://legiscan.com/gaits/documentation/legiscan).

## Installation

`npm install legiscan`

## Quickstart

With your own [API key](https://legiscan.com/legiscan):

```js
import { Legiscan } from 'legiscan'

const legiscan = new Legiscan(process.env.LEGISCAN_API_KEY)

const bill = await legiscan.getBill(1447996)
console.log(bill.title)

const results = await legiscan.search({ query: 'education', state: 'CA' })
console.log(results)
```

## API

Parameters and response shapes match the [LegiScan manual](https://legiscan.com/gaits/documentation/legiscan). TypeScript types ship with the package.

### Search

- `search(params)` — full text search, 50 results per page
- `searchAllResults(params)` — fetches every page; can use many queries on broad searches
- `getSearchRaw(params)` — up to 2000 results per page (`bill_id`, `change_hash`, relevance)

### Bills

- `getBill(billId)`
- `getBills(billIds)` — convenience batch over `getBill`
- `getBillTextByBillId(billId)` — two requests (bill, then latest text); prefer `getBillTextByDocId` when you already have a `doc_id`
- `getBillTextByDocId(docId)` — document body is base64-encoded

### Master lists

- `getMasterListByState(state)`
- `getMasterListBySessionId(sessionId)`
- `getMasterListByStateRaw(state)`
- `getMasterListBySessionIdRaw(sessionId)`

### Amendments, supplements, sessions, roll calls

- `getAmendmentById(amendmentId)` — document body is base64-encoded
- `getSupplementById(supplementId)` — document body is base64-encoded
- `getSessionListByState(state)`
- `getRollCallById(rollCallId)`

### People

- `getPersonById(peopleId)`
- `getSessionPeople(sessionId)`
- `getPersonWithSponsoredBillsById(peopleId)`

### Datasets

- `getDatasetList(state?, year?)` — includes `session_id` and `access_key` for `getDataset`
- `getDataset(sessionId, accessKey)` — session zip archive

### Monitor

- `getMonitorList(record?)`
- `getMonitorListRaw(record?)`
- `setMonitor(list, action, stance?)` — `action`: `monitor` | `remove` | `set`; `stance`: `watch` | `support` | `oppose`
