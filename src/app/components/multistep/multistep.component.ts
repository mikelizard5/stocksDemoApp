import { Component, ViewChild} from '@angular/core';
import { StocksService } from 'src/app/services/stocks.service';
@Component({
  selector: 'multistep-wizard',
  templateUrl: './multistep.component.html',
  styleUrls: ['./multistep.component.scss']
})
export class MultistepComponent{
  email: string = '';
  password: any = '';
  username(){
    this.email;
    console.log(this.email);
  }
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
  @ViewChild('wizard') wizard: any;
  open = true;
}
