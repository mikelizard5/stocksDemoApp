import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import '@clr/icons'
import { ClarityModule, ClrIconModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SummaryComponent } from './components/summary/summary.component'
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { StocksService } from './services/stocks.service';
import { ManageComponent } from './components/manage/manage.component';
import { FormsModule } from '@angular/forms';
import { MultistepComponent } from './components/multistep/multistep.component';
import { TimelineComponent } from './components/timeline/timeline.component';
@NgModule({
  declarations: [
    AppComponent,
    SummaryComponent,
    DashboardComponent,
    ManageComponent,
    MultistepComponent,
    TimelineComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClarityModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ClrIconModule,
    FormsModule
  ],
  providers: [StocksService, MultistepComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
