import {Component, Input, OnInit} from '@angular/core';
import {MonthlySentiment} from "../../services/model/monthlySentiment";

@Component({
  selector: 'app-stock-sentiment-monthly',
  templateUrl: './stock-sentiment-monthly.component.html',
  styleUrls: ['./stock-sentiment-monthly.component.css']
})
export class StockSentimentMonthlyComponent implements OnInit {

  @Input() monthlySentiment: MonthlySentiment = {} as MonthlySentiment;

  constructor() { }

  ngOnInit(): void {
  }

}
