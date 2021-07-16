import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'multistep',
  templateUrl: './multistep.component.html',
  styleUrls: ['./multistep.component.scss']
})
export class MultistepComponent{
  @ViewChild('wizard')
  open = true;
}
