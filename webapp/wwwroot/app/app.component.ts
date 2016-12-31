import { Component, OnInit } from '@angular/core';
import {SomeService} from './services/DataService';
import {Response} from '@angular/http';

@Component({
  selector: 'my-app',
  template: `<h1>Hello {{name}}</h1>`,
})
export class AppComponent implements OnInit  { 
  name = 'Angular'; 
  ds: SomeService;
  data: any;

  constructor(private _ss:SomeService){
  }

  ngOnInit(){
    console.log("ngOnInit Invoked 1");
     this._ss.getArticles()
            .subscribe(
              (data:Response) => console.log(data)
            );
    console.log("ngOnInit Invoked");
  }
}
