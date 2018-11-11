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
var models_1 = require("./models");
var data_service_1 = require("./data.service");
var AddressComponent = (function () {
    function AddressComponent(dataService) {
        this.dataService = dataService;
        this.hideAddress = false;
        this.regions = ['East', 'South', 'North', 'West', 'Midwest'];
    }
    AddressComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataService.getStates().subscribe(function (states) {
            _this.states = states;
        });
    };
    return AddressComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", models_1.Address)
], AddressComponent.prototype, "address", void 0);
AddressComponent = __decorate([
    core_1.Component({
        selector: 'my-address',
        templateUrl: './address.component.html'
    }),
    __metadata("design:paramtypes", [data_service_1.DataService])
], AddressComponent);
exports.AddressComponent = AddressComponent;
//# sourceMappingURL=address.component.js.map