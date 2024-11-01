"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Account = void 0;
exports.printInforAccount = printInforAccount;
var Account = /** @class */ (function () {
    function Account(id, email, username, fullname, department, position, createDate) {
        this.id = id;
        this.email = email;
        this.username = username;
        this.fullname = fullname;
        this.department = department;
        this.position = position;
        this.createDate = createDate;
    }
    Account.prototype.setid = function (v) { this.id = v; };
    Account.prototype.getid = function () { return this.id; };
    Account.prototype.setemail = function (v) { this.email = v; };
    Account.prototype.getemail = function () { return this.email; };
    Account.prototype.setusername = function (v) { this.username = v; };
    Account.prototype.getusername = function () { return this.username; };
    Account.prototype.setfullname = function (v) { this.fullname = v; };
    Account.prototype.getfullname = function () { return this.fullname; };
    Account.prototype.setdepartment = function (v) { this.department = v; };
    Account.prototype.getdepartment = function () { return this.department; };
    Account.prototype.setposition = function (v) { this.position = v; };
    Account.prototype.getposition = function () { return this.position; };
    Account.prototype.setcreateDate = function (v) { this.createDate = v; };
    Account.prototype.getcreateDate = function () { return this.createDate; };
    return Account;
}());
exports.Account = Account;
function printInforAccount(account) {
    console.log("ID: " + account.getid() +
        " Username: " + account.getusername() +
        " Fullname: " + account.getfullname() +
        " Department: " + account.getdepartment().getname() +
        " Position: " + account.getposition().getname());
}
