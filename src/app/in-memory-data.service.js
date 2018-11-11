"use strict";
var test_data_1 = require("./test-data");
var InMemoryDataService = (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var states = ['California', 'Jalisco', 'Quebec', 'Illinois'];
        return { customers: test_data_1.createTestCustomers(), states: states };
    };
    return InMemoryDataService;
}());
exports.InMemoryDataService = InMemoryDataService;
//# sourceMappingURL=in-memory-data.service.js.map