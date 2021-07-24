import { Component } from '@angular/core';
import { MultistepComponent } from './components/multistep/multistep.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'stocks'
  username:string = ''
  constructor( private multistepWizard: MultistepComponent){
    this.username = this.multistepWizard.user();
    console.log(this.multistepWizard.user());
  }
}