import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import {SomeService} from './services/DataService'; 

@NgModule({
  imports:      [ BrowserModule,HttpModule ],
  declarations: [ AppComponent ],
  providers: [SomeService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }