"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Department_1 = require("./Department");
var Position_1 = require("./Position");
var Account_1 = require("./Account");
var dep1 = new Department_1.Department(1, "Information Technology- ");
var dep2 = new Department_1.Department(2, "Digital Marketing -");
console.log('--- Thông tin phòng ban: ---');
(0, Department_1.printInforDepartment)(dep1);
(0, Department_1.printInforDepartment)(dep2);
var pos1 = new Position_1.Position(1, "Dev");
var pos2 = new Position_1.Position(2, "Sale");
console.log('--- Thông tin vị trí: ---');
(0, Position_1.printInforPosition)(pos1);
(0, Position_1.printInforPosition)(pos2);
var date = new Date("2021-07-01");
var acc1 = new Account_1.Account(1, "an.pg@gmail.com", "user1 -", "Gia Ân -", dep1, pos1, date);
var acc2 = new Account_1.Account(2, "uyn.ptt@gmail.com", "user2 -", "Thu Uyn -", dep2, pos2, date);
console.log('--- Thông tin tài khoản: ---');
(0, Account_1.printInforAccount)(acc1);
(0, Account_1.printInforAccount)(acc2);
