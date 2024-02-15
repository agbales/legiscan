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

#### Queries

```
search(query, page, state)
```

- query: string
- page?: number (defaults to 1)
- state?: string (defaults to 'ALL')

```
searchAllResults(query, state)
```

- query: string
- state?: string (defaults to 'ALL')

```
getBill(billId)
```

- billId: number

```
getBills(billIds)
```

- billIds: number[]

```
getBillTextByBillId(billId)
```

- billId: number

```
getBillTextByDocId(docId)
```

- docId: number

```
getMasterListByState(state)
```

- state: string (ex: AL, OK, TX, US, etc.)
