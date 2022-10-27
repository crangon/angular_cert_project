import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private static readonly STOCKS = "STOCKS";

  constructor() { }

  public resetStorage() {
    localStorage.clear();
  }

  public saveStock(stockSymbol: string): string[] {
    let stocks = this.getStoredStocks();
    stocks.push(stockSymbol);

    try {
      localStorage.setItem(StorageService.STOCKS, this.serializeStocks(stocks));
    } catch (e) {
      console.error(`Unable to save stock ${stockSymbol} in local storage`, e);
    }
    return stocks;
  }

  public removeStockByIndex(elementIndex: number): string[] {
    let stocks = this.getStoredStocks();
    stocks.splice(elementIndex, 1);

    try {
      localStorage.setItem(StorageService.STOCKS, this.serializeStocks(stocks));
    } catch (e) {
      console.error(`Unable to remove stock No. ${elementIndex} in local storage`, e);
    }
    return stocks;
  }

  public removeStock(stockSymbol: string): string[] {
    let stocks = this.getStoredStocks().filter(item => item!=stockSymbol);

    try {
      localStorage.setItem(StorageService.STOCKS, this.serializeStocks(stocks));
    } catch (e) {
      console.error(`Unable to remove stock ${stockSymbol} in local storage`, e);
    }
    return stocks;
  }

  public getStoredStocks(): string[] {
    let stocks = localStorage.getItem(StorageService.STOCKS);
    if (stocks) {
      return this.deserializeStocks(stocks);
    }
    return [];
  }

  private serializeStocks(stocks: string[]): string {
    return JSON.stringify(stocks);
  }

  private deserializeStocks(value: string): string[] {
    try {
      return JSON.parse(value) as string[];
    } catch (e) {
      console.error("Unable to deserialize stored stocks", e, value);
      return [];
    }
  }
}
