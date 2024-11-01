"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QLCB = void 0;
var QLCB = /** @class */ (function () {
    function QLCB() {
        this.staffList = [];
    }
    QLCB.prototype.addStaff = function (member) {
        this.staffList.push(member);
    };
    QLCB.prototype.searchByName = function (name) {
        return this.staffList.filter(function (member) { return member.getName() === name; });
    };
    QLCB.prototype.displayAllStaff = function () {
        this.staffList.forEach(function (member) {
            member.displayInfo();
        });
    };
    QLCB.prototype.deleteByName = function (name) {
        this.staffList = this.staffList.filter(function (member) { return member.getName() !== name; });
    };
    QLCB.prototype.exitProgram = function () {
        console.log("Exiting program...");
    };
    return QLCB;
}());
exports.QLCB = QLCB;
