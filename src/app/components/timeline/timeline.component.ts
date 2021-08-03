import { Component } from '@angular/core';
import { ClrTimelineStepState } from '@clr/angular';
import { StockInterface, StocksService } from 'src/app/services/stocks.service';
@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent{
  readonly stateNotStarted = ClrTimelineStepState.NOT_STARTED;
  readonly stateProcessing = ClrTimelineStepState.PROCESSING;
  readonly stateCurrent = ClrTimelineStepState.CURRENT;
  readonly stateError = ClrTimelineStepState.ERROR;
  readonly stateSuccess = ClrTimelineStepState.SUCCESS;
  start = this.stateCurrent;
  card = this.stateNotStarted;
  buy = this.stateNotStarted;
  Debit: any = '';
  closed = false;
  symbols: Array<string>;
  stock: string = '';
  stock_info: Array<StockInterface> = [];
  invest: number = parseInt('');
  profit: Array<number> = [];

  
  constructor(private service: StocksService){
    this.symbols = service.get();
  }
  add(){
    this.symbols = this.service.add(this.stock.toUpperCase());
    this.stock = '';
  }
  remove(symbol:any){
    this.symbols = this.service.remove(symbol);
  }
  investing(){
    this.card = this.stateCurrent;
    this.start = this.stateSuccess;
  }
  card_input(){
    this.card = this.stateProcessing;
    this.closed = true;
  }
  check(){
    if (this.Debit != ''){
      this.card = this.stateSuccess
      this.buy = this.stateCurrent;
      return this.closed = false;
    }else{
      console.log(this.Debit)
      return this.closed = true;
    }
  }
  buying(money:number){
    money = 1 + 100;
    this.profit.push(money);
    console.log(this.profit);
  }
  finish(){
    this.buy = this.stateSuccess
  }
}
