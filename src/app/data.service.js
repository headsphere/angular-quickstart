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
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/delay");
require("rxjs/add/operator/do");
require("rxjs/add/operator/toPromise");
require("rxjs/add/operator/map");
require("rxjs/add/operator/catch");
require("rxjs/add/observable/throw");
var logger_service_1 = require("./logger.service");
var DataService = (function () {
    function DataService(logger, http) {
        this.logger = logger;
        this.http = http;
        this.customerUrl = 'api/customers';
        this.statesUrl = 'api/states';
    }
    DataService.prototype.getCustomersP = function () {
        var _this = this;
        this.logger.log("Getting customers as a promise via http");
        return this.http.get(this.customerUrl)
            .toPromise()
            .then(function (response) {
            var custs = response.json().data;
            _this.logger.log("Got " + custs.length + " customers");
            return custs;
        }, function (error) {
            _this.logger.log("Error occurred " + error);
            return Promise.reject('Something bad happened in getting customers. Check the console');
        });
        // let customers = createTestCustomers();
        // return new Promise<Customer[]>(resolve => {
        //     setTimeout(() => {
        //         this.logger.log(`Got ${customers.length} customers`)
        //         resolve(customers);
        //     }, 1500);
        // });
    };
    DataService.prototype.getCustomers = function () {
        var _this = this;
        this.logger.log("Getting customers as observable via Http...");
        return this.http.get(this.customerUrl)
            .map(function (response) { return response.json().data; })
            .do(function (custs) {
            _this.logger.log("Got " + custs.length + " customers");
            _this.logger.log("Got " + custs.length + " customers");
        })
            .catch(function (error) {
            _this.logger.log("Error occurred " + error);
            return Observable_1.Observable.throw('Something bad happened in getting customers. Check the console');
        });
        // let customers = createTestCustomers();
        // return of(customers)
        //     .delay(1500)
        //     .do(() => {
        //         this.logger.log(`Got ${customers.length} customers`);
        //     });
    };
    DataService.prototype.getStates = function () {
        var _this = this;
        this.logger.log("Getting states as observable via Http...");
        return this.http.get(this.statesUrl)
            .map(function (response) { return response.json().data; })
            .do(function (states) {
            _this.logger.log("Got " + states.length + " states");
        })
            .catch(function (error) {
            _this.logger.log("Error occurred " + error);
            return Observable_1.Observable.throw('Something bad happened in getting states. Check the console');
        });
    };
    return DataService;
}());
DataService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [logger_service_1.LoggerService, http_1.Http])
], DataService);
exports.DataService = DataService;
//# sourceMappingURL=data.service.js.map