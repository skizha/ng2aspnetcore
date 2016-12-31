import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class SomeService {

    private actionUrl: string;
    private headers: Headers;

    constructor(private _http: Http) {

        this.actionUrl = 'http://localhost:5000/api/' + 'values/';
        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Accept', 'application/json');
    }

    getValues(): string {
        return 'Sanjesh';
    }

    // public GetAll = (): Observable<any> => {
    //     return this._http.get(this.actionUrl).map((response: Response) => <any>response.json());
    // }

    getArticles(){
        console.log("calling" + this.actionUrl + "Some thing else");
       return this._http.get(this.actionUrl).map((response: Response) => <any>response.json());
    }

    getArticles1(): Promise<any> {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(this._http.get(this.actionUrl).map((response: Response) => <any>response.json()));
            }, 0)
        });
    }
}