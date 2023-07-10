export interface Months {
  [monthId: string]: Card[];
}

export interface Record {
  id: string;
  recordName: string;
  recordValue: number;
  RecordStatus: boolean;
}

export interface Card {
  id: string;
  cardName: string;
  isIncame: boolean;
  sum: number;
  records: Record[];
}

export interface Summary {
  totalValue: number;
  costs: number;
  remain: number;
}

export interface radio {
  true: boolean;
  false: boolean;
}

export interface Users {
  userID: string;
  name: string;
  email: string;
}
