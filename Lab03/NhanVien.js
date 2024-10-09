"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.NhanVien = void 0;
var CanBo_1 = require("./CanBo");
var NhanVien = /** @class */ (function (_super) {
    __extends(NhanVien, _super);
    function NhanVien(name, age, gender, address, job) {
        var _this = _super.call(this, name, age, gender, address) || this;
        _this.job = job;
        return _this;
    }
    NhanVien.prototype.getJob = function () {
        return this.job;
    };
    NhanVien.prototype.setJob = function (job) {
        this.job = job;
    };
    NhanVien.prototype.displayInfo = function () {
        _super.prototype.displayInfo.call(this);
        console.log("Job: ".concat(this.job));
    };
    return NhanVien;
}(CanBo_1.CanBo));
exports.NhanVien = NhanVien;
