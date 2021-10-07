export interface ILoansInterface {
  id: number;
  title: string;
  tranche: string;
  available: any;
  annualised_return: number;
  term_remaining: number;
  ltv: number;
  amount: any;
  invested: boolean;
}

export interface ILoansInterfaceShort {
  id: number;
  title: string;
  available: number;
  term_remaining: number;
}
