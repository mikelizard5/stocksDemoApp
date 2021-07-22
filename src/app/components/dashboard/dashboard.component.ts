import { Component, OnInit } from '@angular/core';
import { StocksService, StockInterface } from 'src/app/services/stocks.service';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  stocks: Array<StockInterface> = [];
  symbols: Array<string> = [];

  constructor(private service: StocksService) {
    this.symbols = service.get();
   }

  ngOnInit(): void {
    this.service.load(this.symbols).subscribe(stocks => this.stocks = stocks);
  }
}
