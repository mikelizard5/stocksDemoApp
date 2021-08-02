import { Component} from '@angular/core';
import { ClrTimelineStepState } from '@clr/angular';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
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
  investing(){
    this.start = this.stateSuccess;
    this.card = this.stateCurrent;
    
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
  templateForm={}
}
