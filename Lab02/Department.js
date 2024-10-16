"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Department = void 0;
exports.printInforDepartment = printInforDepartment;
var Department = /** @class */ (function () {
    function Department(id, name) {
        this.id = id;
        this.name = name;
    }
    Department.prototype.getname = function () {
        return this.name;
    };
    Department.prototype.setname = function (v) {
        this.name = v;
    };
    Department.prototype.getid = function () {
        return this.id;
    };
    Department.prototype.setid = function (v) {
        this.id = v;
    };
    return Department;
}());
exports.Department = Department;
function printInforDepartment(department) {
    console.log("ID: " + department.getid() + " Department Name: " + department.getname());
}
