import {Stock} from "./stock";

export interface StockSearchResult {
  count: number;
  result: Stock[];
}
