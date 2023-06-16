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
  records: Record[];
}

export interface Summary {
  totalValue: number;
  costs: number;
  remain: number;
}
