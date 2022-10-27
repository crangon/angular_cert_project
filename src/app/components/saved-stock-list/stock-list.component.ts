import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-stock-list',
  templateUrl: './stock-list.component.html',
  styleUrls: ['./stock-list.component.css']
})
export class StockListComponent implements OnInit {

  @Input() stocks: string[] = [];
  @Output() removeStock = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  removeStockListener(elementIndex: number) {
    this.removeStock.emit(elementIndex);
  }
}
