import { Department, printInforDepartment } from "./Department";
import { Position, printInforPosition } from "./Position";
import { Account, printInforAccount } from "./Account";


let dep1 = new Department(1, "Information Technology- ");
let dep2 = new Department(2, "Digital Marketing -");

console.log('--- Thông tin phòng ban: ---');
printInforDepartment(dep1);
printInforDepartment(dep2);


let pos1 = new Position(1, "Dev");
let pos2 = new Position(2, "Sale");

console.log('--- Thông tin vị trí: ---');
printInforPosition(pos1);
printInforPosition(pos2);


let date = new Date("2021-07-01");
let acc1 = new Account(1, "an.pg@gmail.com", "user1 -", "Gia Ân -", dep1, pos1, date);
let acc2 = new Account(2, "uyn.ptt@gmail.com", "user2 -", "Thu Uyn -", dep2, pos2, date);

console.log('--- Thông tin tài khoản: ---');
printInforAccount(acc1);
printInforAccount(acc2);
