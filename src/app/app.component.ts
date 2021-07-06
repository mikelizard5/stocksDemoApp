import { Component } from '@angular/core';
import { StocksService, StockInterface } from './services/stocks.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  stocks: any|Array<StockInterface>;

  constructor(service: StocksService){
    service.load(['AAPL'])?.subscribe(stocks => {
      this.stocks =stocks;
    });
  }
}
