"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Position = void 0;
exports.printInforPosition = printInforPosition;
var Position = /** @class */ (function () {
    function Position(id, name) {
        this.id = id;
        this.name = name;
    }
    Position.prototype.getname = function () {
        return this.name;
    };
    Position.prototype.setname = function (v) {
        this.name = v;
    };
    Position.prototype.getid = function () {
        return this.id;
    };
    Position.prototype.setid = function (v) {
        this.id = v;
    };
    return Position;
}());
exports.Position = Position;
function printInforPosition(position) {
    console.log("ID: " + position.getid() + " Position Name: " + position.getname());
}
