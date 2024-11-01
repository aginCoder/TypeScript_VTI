"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CanBo = void 0;
var CanBo = /** @class */ (function () {
    function CanBo(name, age, gender, address) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.address = address;
    }
    // Getters and setters to encapsulate properties
    CanBo.prototype.getName = function () {
        return this.name;
    };
    CanBo.prototype.setName = function (name) {
        this.name = name;
    };
    CanBo.prototype.getAge = function () {
        return this.age;
    };
    CanBo.prototype.setAge = function (age) {
        this.age = age;
    };
    CanBo.prototype.getGender = function () {
        return this.gender;
    };
    CanBo.prototype.setGender = function (gender) {
        this.gender = gender;
    };
    CanBo.prototype.getAddress = function () {
        return this.address;
    };
    CanBo.prototype.setAddress = function (address) {
        this.address = address;
    };
    CanBo.prototype.displayInfo = function () {
        console.log("Name: ".concat(this.name, ", Age: ").concat(this.age, ", Gender: ").concat(this.gender, ", Address: ").concat(this.address));
    };
    return CanBo;
}());
exports.CanBo = CanBo;
