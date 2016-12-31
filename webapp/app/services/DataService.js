"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
require('rxjs/add/operator/map');
var SomeService = (function () {
    function SomeService(_http) {
        this._http = _http;
        this.actionUrl = 'http://localhost:5000/api/' + 'values/';
        this.headers = new http_1.Headers();
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Accept', 'application/json');
    }
    SomeService.prototype.getValues = function () {
        return 'Sanjesh';
    };
    // public GetAll = (): Observable<any> => {
    //     return this._http.get(this.actionUrl).map((response: Response) => <any>response.json());
    // }
    SomeService.prototype.getArticles = function () {
        console.log("calling" + this.actionUrl + "Some thing else");
        return this._http.get(this.actionUrl).map(function (response) { return response.json(); });
    };
    SomeService.prototype.getArticles1 = function () {
        var _this = this;
        return new Promise(function (resolve) {
            setTimeout(function () {
                resolve(_this._http.get(_this.actionUrl).map(function (response) { return response.json(); }));
            }, 0);
        });
    };
    SomeService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], SomeService);
    return SomeService;
}());
exports.SomeService = SomeService;
//# sourceMappingURL=DataService.js.map