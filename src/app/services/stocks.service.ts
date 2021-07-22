import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

let stocks: Array<string> = ['vmw'];
let service: string = 'https://angular2-in-action-api.herokuapp.com';

export interface StockInterface {
  symbol: string;
  lastTradePriceOnly: number;
  change: number;
  changeInPercent: number;
}

@Injectable()
export class StocksService {
  constructor(private http: HttpClient) {}
  get(){
    return stocks.slice();
  }
  add(stock: string){
    stocks.push(stock);
    return this.get()
  }
  remove(stock: string){
    stocks.splice(stocks.indexOf(stock), 1);
    return this.get();
  }
  load(symbols: string[]): Observable<Array<StockInterface>>{
    return this.http.get<Array<StockInterface>>(service +'/stocks/snapshot?symbols=' + symbols.join());
  }
}