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
exports.KySu = void 0;
var CanBo_1 = require("./CanBo");
var KySu = /** @class */ (function (_super) {
    __extends(KySu, _super);
    function KySu(name, age, gender, address, field) {
        var _this = _super.call(this, name, age, gender, address) || this;
        _this.field = field;
        return _this;
    }
    KySu.prototype.getField = function () {
        return this.field;
    };
    KySu.prototype.setField = function (field) {
        this.field = field;
    };
    KySu.prototype.displayInfo = function () {
        _super.prototype.displayInfo.call(this);
        console.log("Field: ".concat(this.field));
    };
    return KySu;
}(CanBo_1.CanBo));
exports.KySu = KySu;
