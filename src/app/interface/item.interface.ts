export interface Item {
  card: Card[];
}

export interface Record {
  id: string;
  recordName: string;
  recordValue: number;
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
