# legiscan

Easily interact with the LegiScan API with javascript. Get your [LegiScan API Key](https://legiscan.com/legiscan) and follow the instructions below.

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

```
getBillTextByBillId(billId)
```

- billId: number

```
getBillTextByDocId(docId)
```

- docId: number

### State bill lists

```
getMasterListByState(state)
```

- state: string (ex: AL, OK, TX, US, etc.)
