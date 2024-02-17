export type SearchResult = {
  relevance: number;
  state: string;
  bill_number: string;
  bill_id: number;
  change_hash: string;
  url: string;
  text_url: string;
  research_url: string;
  last_action_date: string;
  last_action: string;
  title: string;
};

type MIME64EncodedDocument = string;

export type BillText = {
  doc_id: number;
  bill_id: number;
  date: string;
  type: string;
  type_id: string;
  mime: string;
  mime_id: number;
  text_size: number;
  text_hash: string;
  doc: MIME64EncodedDocument;
};

type Summary = {
  page: string;
  range: string;
  relevancy: string;
  count: number;
  page_current: number;
  page_total: number;
};

export type SearchResponse = {
  summary: Summary;
  results: SearchResult[];
};

type Vote = {
  people_id: number;
  vote_id: number;
  vote_text: string;
};

export type RollCall = {
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
  votes: Vote[];
};

export type Session = {
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
};

type StatusKey = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

type Committee = {
  committee_id: number;
  chamber: string;
  chamber_id: number;
  name: string;
};

type Referral = {
  date: string;
  committee_id: number;
  chamber: string;
  chamber_id: number;
  name: string;
};

type HistoryAction = {
  date: string;
  action: string;
  chamber: string;
  chamber_id: number;
  importance: number;
};

type Sponsor = {
  people_id: number;
  person_hash: string;
  party_id: string;
  state_id: number;
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
  sponsor_type_id: number;
  sponsor_order: number;
  committee_sponsor: number;
  committee_id: number;
  state_federal: number;
};

type Subject = {
  subject_id: number;
  subject_name: string;
};

type CalendarEvent = {
  type_id: number;
  type: string;
  date: string;
  time: string;
  location: string;
  description: string;
};

type Text = {
  doc_id: number;
  date: string;
  type: string;
  type_id: number;
  mime: string;
  mime_id: number;
  url: string;
  state_link: string;
  text_size: number;
  text_hash: string;
};

export type Amendment = {
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
};

export type Supplement = {
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
};

export type LegiscanBill = {
  bill_id: number;
  change_hash: string;
  session_id: number;
  session: Session;
  url: string;
  state_link: string;
  completed: number;
  status: StatusKey;
  status_date: string;
  progress: ProgressEvent[];
  state: string;
  state_id: number;
  bill_number: string;
  bill_type: string;
  bill_type_id: string;
  body: string;
  body_id: number;
  current_body: string;
  current_body_id: number;
  title: string;
  description: string;
  pending_committee_id: number;
  committee: Committee;
  referrals: Referral[];
  history: HistoryAction[];
  sponsors: Sponsor[];
  sasts: [];
  subjects: Subject[];
  texts: Text[];
  votes: [];
  amendments: Amendment[];
  supplements: Supplement[];
  calendar: CalendarEvent[];
};

export type MasterList = {
  [key: string]: {
    bill_id: number;
    number: string;
    change_hash: string;
    url: string;
    status_date: string;
    status: string;
    last_action_date: string;
    last_action: string;
  };
};

export type MasterListRaw = {
  [key: string]: {
    bill_id: number;
    number: string;
    change_hash: string;
  };
};

export type State =
  | 'AK'
  | 'HI'
  | 'AL'
  | 'AR'
  | 'AZ'
  | 'CA'
  | 'CO'
  | 'CT'
  | 'DE'
  | 'FL'
  | 'GA'
  | 'IA'
  | 'ID'
  | 'IL'
  | 'IN'
  | 'KS'
  | 'KY'
  | 'LA'
  | 'MA'
  | 'MD'
  | 'ME'
  | 'MI'
  | 'MN'
  | 'MO'
  | 'MS'
  | 'MT'
  | 'NC'
  | 'ND'
  | 'NE'
  | 'NH'
  | 'NJ'
  | 'NM'
  | 'NV'
  | 'NY'
  | 'OH'
  | 'OK'
  | 'OR'
  | 'PA'
  | 'RI'
  | 'SC'
  | 'SD'
  | 'TN'
  | 'TX'
  | 'UT'
  | 'VA'
  | 'VT'
  | 'WA'
  | 'WI'
  | 'WV'
  | 'WY'
  | 'US';
