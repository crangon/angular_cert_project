import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MainComponent} from './components/main/main.component';
import {HttpClientModule} from "@angular/common/http";

import {StockAddFormComponent} from './components/stock-search-form/stock-add-form.component';
import {StockListComponent} from './components/saved-stock-list/stock-list.component';
import {StockOverviewComponent} from './components/stock-overview/stock-overview.component';
import {StockSentimentComponent} from './components/stock-sentiment/stock-sentiment.component';
import {StockSentimentMonthlyComponent} from './components/stock-sentiment-monthly/stock-sentiment-monthly.component';
import {MonthPipe} from './pipes/month.pipe';
import {DirectionIconComponent} from './components/direction-icon/direction-icon.component';
import {PositiveSignumPipe} from './pipes/positive-signum.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    StockAddFormComponent,
    StockListComponent,
    StockOverviewComponent,
    StockSentimentComponent,
    StockSentimentMonthlyComponent,
    MonthPipe,
    DirectionIconComponent,
    PositiveSignumPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
