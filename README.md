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
console.log(results.summary, results.results)
```

API errors (`status: ERROR`) throw `LegiscanError`.

## API

Parameters and response shapes match the [LegiScan manual](https://legiscan.com/gaits/documentation/legiscan). Method names follow LegiScan operations; older aliases are noted below. TypeScript types ship with the package.

### Search

- `search(params)` — `getSearch`, 50 results per page; returns `{ summary, results }`
- `searchAllResults(params)` — fetches every page; can use many queries on broad searches
- `getSearchRaw(params)` — `getSearchRaw`, up to 2000 abbreviated results per page

`params`: `query`, optional `page`, `year` (1=all, 2=current, 3=recent, 4=prior, or exact year), `state` (incl. `ALL`), or `sessionId`.

### Bills

- `getBill(billId)`
- `getBills(billIds)` — convenience batch over `getBill`
- `getBillText(docId)` — document body is base64-encoded
- `getBillTextByDocId(docId)` — alias for `getBillText`
- `getBillTextByBillId(billId)` — two requests (bill, then latest text); prefer `getBillText` when you have a `doc_id`

### Master lists

- `getMasterListByState(state)` / `getMasterListBySessionId(sessionId)`
- `getMasterListByStateRaw(state)` / `getMasterListBySessionIdRaw(sessionId)`

### Amendments, supplements, sessions, roll calls

- `getAmendment(amendmentId)` — alias: `getAmendmentById`
- `getSupplement(supplementId)` — alias: `getSupplementById`
- `getSessionList(state?)` — omit `state` for all sessions; alias: `getSessionListByState`
- `getRollCall(rollCallId)` — alias: `getRollCallById`

### People

- `getPerson(peopleId)` — alias: `getPersonById`
- `getSessionPeople(sessionId)`
- `getSponsoredList(peopleId)` — alias: `getPersonWithSponsoredBillsById`

### Datasets

- `getDatasetList(state?, year?)` — includes `session_id` and `access_key` for dataset fetch
- `getDataset(sessionId, accessKey, format?)` — session zip as base64 JSON (`format`: `json` | `csv`)
- `getDatasetRaw(sessionId, accessKey, format?)` — binary zip `ArrayBuffer`

### Monitor

- `getMonitorList(record?)` — `record`: `current` | `archived` (default `current`)
- `getMonitorListRaw(record?)`
- `setMonitor(list, action, stance?)` — `action`: `monitor` | `remove` | `set`; `stance`: `watch` | `support` | `oppose`
