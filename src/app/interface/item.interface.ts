export interface Item {
  card: {
    cardName: string;
    isIncame: boolean;
    records: {
      recordName: string;
      recordValue: number;
    }[];
  }[];
}
