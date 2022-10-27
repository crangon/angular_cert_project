import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {FinnhubService} from "../../services/finnhub.service";
import {Observable, of, tap} from "rxjs";
import {Stock} from "../../services/model/stock";
import {InsiderSentiment} from "../../services/model/insider-sentiment";

@Component({
  selector: 'app-stock-sentiment',
  templateUrl: './stock-sentiment.component.html',
  styleUrls: ['./stock-sentiment.component.css']
})
export class StockSentimentComponent implements OnInit {

  public readonly N_OF_MONTHS:number = 3;
  public availableMonths:number = -1;
  public stockSymbol: string = '';
  public stock$: Observable<Stock> = of<Stock>();
  public insiderSentiment$: Observable<InsiderSentiment> = of<InsiderSentiment>();

  constructor(private router: Router,
              private route: ActivatedRoute,
              private finnhubService: FinnhubService) {
  }

  ngOnInit(): void {
    this.route.params.subscribe( params => {
        this.stockSymbol = params["symbol"];
        this.stock$ = this.finnhubService.getStockInformation(this.stockSymbol);
        this.insiderSentiment$ = this.finnhubService.getInsiderSentimentNMonths(this.stockSymbol, this.N_OF_MONTHS)
          .pipe(tap(data=>console.log(data)));
      this.insiderSentiment$.subscribe(
        sentiment => this.availableMonths = sentiment.data.length
      );
      }
    )
  }
}
