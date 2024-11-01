"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
// Khai báo class Person
var Person = /** @class */ (function () {
    // constructor
    // public Person(id, name, address) {
    //     this.id = id;
    //     this.name = name;
    //     this.address = address;
    // }
    function Person(id, name, address) {
        this.id = id;
        this.name = name;
        this.address = address;
    }
    Person.prototype.setId = function (id) {
        this.id = id;
    };
    Person.prototype.setname = function (name) {
        this.name = name;
    };
    Person.prototype.setaddress = function (address) {
        this.address = address;
    };
    Person.prototype.getID = function () {
        return this.id;
    };
    Person.prototype.getName = function () {
        return this.name;
    };
    Person.prototype.getAddress = function () {
        return this.address;
    };
    // Khai báo phương thức GoVTI
    Person.prototype.goVTI = function () {
        console.log("Student go to VTI to learn");
    };
    // Viết hàm toString()
    Person.prototype.toString = function () {
        return "ID: ".concat(this.id, ", name: ").concat(this.name, ", address: ").concat(this.address);
    };
    return Person;
}());
exports.Person = Person;
// export var myname = 'Ân';
// export var myAge = 20;
// var logoVTI = "VTI ACADEMY";
// export default logoVTI;
// export { Person, myname, myAge } ;
// Demo
// var person1 = new Person();
// person1.id = 1;
// person1.name = "an.pg";
// person1.address = "ĐL";
// // In ra
// console.log("Thông tin của person1 là: ");
// console.log("ID:" + person1.id);
// console.log("Name:" + person1.name);
// console.log("Address:" + person1.address);
