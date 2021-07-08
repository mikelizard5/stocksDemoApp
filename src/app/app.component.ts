import { Component } from '@angular/core';
import { StocksService, StockInterface } from './services/stocks.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [StocksService]
})
export class AppComponent {
  title = 'stocks'
  stocks: Array<StockInterface> = [];

  constructor(private service: StocksService){
    this.service.load(['aapl'])?.subscribe(stocks => {
      this.stocks = stocks;
    });
  }
}