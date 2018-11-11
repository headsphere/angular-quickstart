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
var CustomerDetailComponent = (function () {
    function CustomerDetailComponent() {
        this.shift = new core_1.EventEmitter();
        this.showAddress = true;
    }
    CustomerDetailComponent.prototype.left = function () {
        this.shift.emit(-1);
        console.debug("shift left");
    };
    CustomerDetailComponent.prototype.right = function () {
        this.shift.emit(1);
        console.debug("shift right");
    };
    return CustomerDetailComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", models_1.Customer)
], CustomerDetailComponent.prototype, "customer", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], CustomerDetailComponent.prototype, "shift", void 0);
CustomerDetailComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'customer-detail',
        templateUrl: 'customer-detail.component.html',
    })
], CustomerDetailComponent);
exports.CustomerDetailComponent = CustomerDetailComponent;
//# sourceMappingURL=customer-detail.component.js.map