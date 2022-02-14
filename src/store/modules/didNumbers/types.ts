export interface IDidNumberItem {
  id: number;
  value: string;
  monthyPrice: string;
  setupPrice: string;
  currency: string;
}

export interface IDidNumbersState {
  numbers: IDidNumberItem[];
}
