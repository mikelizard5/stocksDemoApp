import { Component, NgModule } from '@angular/core';
import { StocksService } from 'src/app/services/stocks.service';
@Component({
  selector: 'manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.scss']
})

export class ManageComponent{
  symbols: Array<string>;
  stock: string = '';
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
}
