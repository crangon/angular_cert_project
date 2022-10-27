import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {concatAll, filter, first, map, Observable} from 'rxjs';
import {StockQuote} from './model/stock-quote';
import {StockSearchResult} from "./model/stock-search-result";
import {Stock} from "./model/stock";
import {DatePipe} from "@angular/common";
import {InsiderSentiment} from "./model/insider-sentiment";

@Injectable({
  providedIn: 'root'
})
export class FinnhubService {

  private static readonly BASE_URL = 'https://finnhub.io/api/v1/';
  private static readonly API_KEY = 'cdckehaad3ic4diebtsgcdckehaad3ic4diebtt0';
  private static readonly API_DATE_FORMAT = 'yyyy-MM-dd';

  constructor(private http:HttpClient) { }

  public getStockInformation(stockSymbol: string): Observable<Stock> {
    return this.searchStocks(stockSymbol).pipe(
      map( (searchResult: StockSearchResult) => searchResult.result),
      concatAll(),
      filter( (stock: Stock) => stock.symbol==stockSymbol ),
      first(),
    );
  }

  public searchStocks(stock: string): Observable<StockSearchResult> {
    return this.http.get<StockSearchResult>(
      `${FinnhubService.BASE_URL}search?q=${stock}&token=${FinnhubService.API_KEY}`
    );
  }

  public getStockQuote(stockSymbol: string): Observable<StockQuote> {
    return this.http.get<StockQuote>(
      `${FinnhubService.BASE_URL}quote?symbol=${stockSymbol}&token=${FinnhubService.API_KEY}`
    );
  }

  public getInsiderSentimentNMonths(stockSymbol: string, lastNMonths: number): Observable<InsiderSentiment> {
    let now = new Date();
    let from = new Date();
    from.setDate(1);
    from.setMonth(now.getMonth()-lastNMonths+1);// works relative, will adjust the year with negative months
    return this.getInsiderSentiment(stockSymbol, from, now);
  }

  public getInsiderSentiment(stockSymbol: string, fromDate: Date, toDate: Date): Observable<InsiderSentiment> {
    let datePipe: DatePipe = new DatePipe("en-US");
    let formattedFromDate = datePipe.transform(fromDate, FinnhubService.API_DATE_FORMAT);
    let formattedToDate = datePipe.transform(toDate, FinnhubService.API_DATE_FORMAT);
    console.log(`Fetching sentiment for ${stockSymbol} from ${formattedFromDate} to ${formattedToDate}`);
    return this.http.get<InsiderSentiment>(
      `${FinnhubService.BASE_URL}stock/insider-sentiment?symbol=${stockSymbol}&from=${formattedFromDate}&to=${formattedToDate}&token=${FinnhubService.API_KEY}`
    );
  }
}
