# legiscan

Easily interact with the [LegiScan API]() with javascript. Get your [LegiScan API Key](https://legiscan.com/legiscan) and follow the instructions below.

## Installation

`npm install legiscan`

## Usage

#### Quickstart

```
import { Legiscan } from 'legiscan'

const apiKey = 'your-api-key'
const legiscan = new Legiscan(apiKey)

const billId = 1447996

legiscan
  .getBill(billId)
  .then(res => console.log(res))
  .catch(error => console.error(error))
```

## Queries

### Search

#### search

Full text search, returning 50 results per page.

```javascript
search({
  query: string,
  page?: number,
  year?: number,
  state?: string,
  id?: number
})
```

- `query` required search query
- `page` default: 1
- `year` default: 2 -- 1=all, 2=current, 3=recent, 4=prior, >1900=exact
- `state` default: 'ALL'
- `id` session number

#### searchAllResults

Full text search returning all pages. Caution: this can use a significant amount of queries if your search criteria is broad. It will perform a fetch for every page, consisting of 50 results each.

```javascript
searchAllResults({
  query: string,
  year?: number,
  state?: string,
  id?: number
})
```

- `query` required search query
- `year` default: 2 -- 1=all, 2=current, 3=recent, 4=prior, >1900=exact
- `state` default: 'ALL'
- `id` session number

#### searchRaw

Full text search returning 2000 bills per page. The objects returned do not include descriptions and titles like the full text search. Instead, they provide `bill_id` and `change_hash` along with a `relevance` score.

```
searchRaw({
  query: string,
  page?: number,
  year?: number,
  state?: string,
  id?: number
})
```

- `query` required search query
- `page` default: 1
- `year` default: 2 -- 1=all, 2=current, 3=recent, 4=prior, >1900=exact
- `state` default: 'ALL'
- `id` session number

### Bills

```
getBill(billId)
```

- billId: number

```
getBills(billIds)
```

- billIds: number[]

### Bill Texts

#### getBillTextByBillId

Fetches the latest version of a bill's text, if available. This performs two API requests: one to fetch the bill and another to fetch the latest text. If you already know the `doc_id`, use `getBillTextByDocId`.

```
getBillTextByBillId(billId)
```

#### getBillTextByDocId

Get a bill text by its `doc_id`. The response includes the doc's date, draft revision information and MIME type. The bill text itself is base64 encoded to allow for binary PDF/Word transfers.

- billId: number

```
getBillTextByDocId(docId)
```

- docId: number

### State bill lists

#### getMasterListByState

Returns a list of summary bill data in the current state session.

```
getMasterListByState(state)
```

#### getMasterListByStateRaw

Returns a list of bill `change_hash` data in the current state session.

```
getMasterListByStateRaw(state)
```

- state: string (ex: AL, OK, TX, US, etc.)

#### getMasterListBySessionId

Returns a list of summary bill data in a specific session.

```
getMasterListBySessionId(sessionId)
```

- sessionId: number

#### getMasterListBySessionIdRaw

Returns a list of bill `change_hash` data in the specific session.

```
getMasterListBySessionIdRaw(sessionId)
```

- sessionId: number
