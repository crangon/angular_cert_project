import {Component, OnInit} from '@angular/core';
import {StorageService} from "../../services/storage.service";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  stockList: string[] = [];

  constructor(private storageService: StorageService) { }

  ngOnInit(): void {
    this.stockList = this.storageService.getStoredStocks();
  }

  trackStock(stockSymbol: string) {
    this.stockList = this.storageService.saveStock(stockSymbol);
  }

  removeStock(elementIndex: number) {
    this.stockList = this.storageService.removeStockByIndex(elementIndex);
  }
}
