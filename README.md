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

## Search

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

```javascript
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

### Materlists

Get get a list of bill summaries by state or session ID. The response is a `MasterList` object:

```typescript
{
  "0": {
      bill_id: number;
      number: string;
      change_hash: string;
      url: string;
      status_date: string;
      status: string;
      last_action_date: string;
      last_action: string;
    }
  },
  "1": {
    ...
  },
  ...
}
```

#### getMasterListByState

Returns a list of summary bill data in the current state session.

```
getMasterListByState(state)
```

- `state` string (ex: AL, OK, US, etc.) Default: 'ALL'

#### getMasterListBySessionId

Returns a list of summary bill data in a specific session.

```
getMasterListBySessionId(sessionId)
```

- `sessionId` number

### Materlists Raw

Get a list of bill change hash data by state or session ID. The response is a `MasterListRaw` object:

```typescript
{
  "0": {
    bill_id: number;
    number: string;
    change_hash: string;
  },
  "1": {
    ...
  },
  ...
}
```

#### getMasterListByStateRaw

Returns a list of bill `change_hash` data in the current state session.

```
getMasterListByStateRaw(state)
```

- `state`: string (ex: AL, OK, US, etc.) Default: 'ALL'

- `sessionId`: number

#### getMasterListBySessionIdRaw

Returns a list of bill `change_hash` data in the specific session.

```
getMasterListBySessionIdRaw(sessionId)
```

- `sessionId`: number

### Amendments

Get an amendment by its ID. The amendment text itself is base64 encoded to allow for binary PDF/Word transfers. Returns an amendment object:

```
{
  amendment_id: number;
  chamber: string;
  chamber_id: number;
  bill_id: number;
  adopted: number;
  date: string;
  title: string;
  description: string;
  mime: string;
  mime_id: number;
  amendment_size: number;
  amendment_hash: string;
}
```

```
getAmendmentById(amendmentId)
```

- `amendmentId`: number

### Sessions

Get a list of sessions in a given state abbreviation. Returns an array of session objects:

```typescript
[
  {
    session_id: number;
    state_id: number;
    year_start: number;
    year_end: number;
    prefile: number;
    sine_die: number;
    prior: number;
    special: number;
    session_tag: string;
    session_title: string;
    session_name: string;
  },
  ...
]
```

```
getSessionListByState(state)
```

- `state`: string (ex: AL, OK, US, etc.) Default: 'ALL'

### Supplements

Get a supplement text by ID. The supplement text itself is base64 encoded to allow for binary PDF/Word transfers. Returns a supplement object:

```typescript
{
  supplement_id: number;
  bill_id: number;
  date: string;
  type_id: number;
  type: string;
  title: string;
  description: string;
  mime: string;
  mime_id: number;
  supplement_size: number;
  supplement_hash: string;
  doc: string;
}
```

```
getSupplementById(supplementId)
```

- `supplementId` number

### Roll Calls

Get roll call details, including a summary and individual votes with `people_id`. Returns a `RollCall` object:

```typescript
{
  roll_call_id: number;
  bill_id: number;
  date: string;
  desc: string;
  yea: number;
  nay: number;
  nv: number;
  absent: number;
  total: number;
  passed: number;
  chamber: string;
  chamber_id: number;
  votes: [{
    people_id: number;
    vote_id: number;
    vote_text: string;
  },
  ...
  ];
}
```

```
getRollCallById(rollCallId)
```

- `rollCallId` number

### People

Get information about people related to bills. Returns a `Person` object:

```typescript
{
  people_id: number;
  person_hash: string;
  state_id: number;
  party_id: string;
  party: string;
  role_id: number;
  role: string;
  name: string;
  first_name: string;
  middle_name: string;
  last_name: string;
  suffix: string;
  nickname: string;
  district: string;
  ftm_eid: number;
  votesmart_id: number;
  opensecrets_id: string;
  knowwho_pid: number;
  ballotpedia: string;
  committee_sponsor: number;
  committee_id: number;
}
```

```
getPersonById(peopleId)
```

- `peopleId` number

#### getPeopleBySessionId

Get a list of individuals active in a given session.

```
getPeopleBySessionId(sessionId)
```

- `sessionId` number

`getPeopleBySessionId` response includes session and people data:

```
  session: {
    session_id: number;
    state_id: number;
    year_start: number;
    year_end: number;
    special: number;
    prefile: number;
    prior: number;
    sine_die: number;
    session_name: string;
    name: string;
    dataset_hash: string;
  },
  people: Person[];
```

#### getPersonWithSponsoredBills

Get a list of bills sponsored by an individual legislator.

```
getPersonWithSponsoredBills(peopleId)
```

- `peopleId` number

Returns details about a person, including their bills they've sponsored:

```typescript
{
  sponsor: {
    people_id: number;
    person_hash: string;
    state_id: number;
    party_id: string;
    party: string;
    role_id: number;
    role: string;
    name: string;
    first_name: string;
    middle_name: string;
    last_name: string;
    suffix: string;
    nickname: string;
    district: string;
    ftm_eid: string;
    votesmart_id: number;
    opensecrets_id: string;
    knowwho_pid: number;
    ballotpedia: string;
    committee_sponsor: number;
    committee_id: number;
  };
  sessions: [{
    session_id: number;
    session_name: string;
  }],
  bills: [{
    session_id: number;
    bill_id: number;
    number: string;
  }]
}
```

### Datasets

#### getDataset

Get a `.zip` archive for the requested dataset containing all bills, votes and people. Find the `accessKey` via `getDatasetList`.

```
getDataset(sessionId, accessKey)
```

- `sessionId` number
- `accessKey` string

#### getDatasetList

Get a list of available session datasets, with optional state and year filtering.

Response is an array of `Dataset` objects that include the `session_id` and `access_key` required to call `getDataset`.

```
[
  {
    state_id: number;
    session_id: number;
    session_name: string;
    dataset_hash: string;
    dataset_date: string;
    dataset_size: number;
    mime: string;
    zip: string;
  }
]
```

```
getDatasetList({
  state?: string;
  year?: number
})
```
