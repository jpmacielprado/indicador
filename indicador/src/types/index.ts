export type SignalType = "COMPRA" | "VENDA" | "NEUTRO";

export interface ITickerData {
  symbol: string;
  price: number;
  change: number;
  signal: SignalType;
  confidence: number;
}
