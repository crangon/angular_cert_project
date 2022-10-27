import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-stock-add-form',
  templateUrl: './stock-add-form.component.html',
  styleUrls: ['./stock-add-form.component.css']
})
export class StockAddFormComponent implements OnInit {

  @Output() stockAdded = new EventEmitter<string>();

  stockForm: FormGroup = new FormGroup({
    stock: new FormControl('', Validators.required),
  });

  constructor() { }

  ngOnInit(): void {
  }

  trackStock() {
    if (this.stockForm.valid) {
      this.stockAdded.emit(this.stockForm.get('stock')?.value);
    }
  }
}
