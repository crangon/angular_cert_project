import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FinnhubService} from "../../services/finnhub.service";

@Component({
  selector: 'app-stock-overview',
  templateUrl: './stock-overview.component.html',
  styleUrls: ['./stock-overview.component.css']
})
export class StockOverviewComponent implements OnInit {

  @Input() stockSymbol: string = '';
  @Input() index: number = -1;
  @Output() removeStock = new EventEmitter<number>();

  companyName: string = '';
  percentageChangeToday: number = 0;
  openingPrice: number = 0;
  currentPrice: number = 0;
  highPrice: number = 0;
  stockFetched: boolean = false;
  errorMessages: string[] = [];

  constructor(private finnhubService: FinnhubService) { }

  ngOnInit(): void {
    this.finnhubService.getStockInformation(this.stockSymbol).subscribe({
        next: (stock) => {
          this.companyName = stock.description
          this.stockFetched = true;
        },
        error: (err) => {
          this.errorMessages.push(err);
        }
      }
    );
    this.finnhubService.getStockQuote(this.stockSymbol).subscribe( {
        next: (quote) => {
          this.percentageChangeToday = quote.dp/100;
          this.openingPrice = quote.o;
          this.currentPrice = quote.c;
          this.highPrice = quote.h;
        },
        error: (err) => {
          this.errorMessages.push(err);
        }
      }
    );
  }

  removeStockAction() {
    if (this.index>=0) {
      this.removeStock.emit(this.index);
    }
  }
}
