import {MonthlySentiment} from "./monthlySentiment";

export interface InsiderSentiment {
  data: MonthlySentiment[];
  symbol: string;
}
