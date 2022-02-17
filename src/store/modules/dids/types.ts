export interface IDidItem {
  id: number;
  value: string;
  monthyPrice: string;
  setupPrice: string;
  currency: string;
}

export interface IDidsState {
  dids: IDidItem[];
}
