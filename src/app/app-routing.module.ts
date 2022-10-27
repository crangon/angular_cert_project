import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainComponent} from "./components/main/main.component";
import {StockSentimentComponent} from "./components/stock-sentiment/stock-sentiment.component";

const routes: Routes = [
  {
    path: "sentiment/:symbol",
    component: StockSentimentComponent
  },
  {
    path: "**",
    component: MainComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
