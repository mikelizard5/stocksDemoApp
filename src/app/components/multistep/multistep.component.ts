import { Component, ViewChild, OnInit } from '@angular/core';

@Component({
  selector: 'multistep-wizard',
  templateUrl: './multistep.component.html',
  styleUrls: ['./multistep.component.scss']
})
export class MultistepComponent{
  email: string = '';
  password: any = '';
  username(){
    console.log(this.email);
  }
  @ViewChild('wizard') wizard: any;
  open = true;
}
