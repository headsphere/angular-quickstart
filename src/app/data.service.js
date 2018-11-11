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
var test_data_1 = require("./test-data");
var logger_service_1 = require("./logger.service");
var DataService = (function () {
    function DataService(logger) {
        this.logger = logger;
    }
    DataService.prototype.getCustomers = function () {
        var _this = this;
        this.logger.log("Getting customers as a promise");
        var customers = test_data_1.createTestCustomers();
        return new Promise(function (resolve) {
            setTimeout(function () {
                _this.logger.log("Got " + customers.length + " customers");
                resolve(customers);
            }, 1500);
        });
    };
    return DataService;
}());
DataService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [logger_service_1.LoggerService])
], DataService);
exports.DataService = DataService;
//# sourceMappingURL=data.service.js.map