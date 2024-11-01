// import { Person, myname, myAge } from "./Person";
// import logo from "./Person";
import { Person } from "./Person";

// Demo
// var person1 = new Person();
// person1.id = 1;
// person1.name = "an.pg";
// person1.address = "ĐL";

// person1.setId(1);
// person1.setname("Ân");
// person1.setaddress("Đắk Lắk");

var person1 = new Person(1, "an.pg", "ĐL");
// In ra
// console.log("Thông tin của person1 là: ");
// console.log("ID:" + person1.getID());
// console.log("Name:" + person1.getName());
// console.log("Address:" + person1.getAddress());

// console.log("My name is: " + myname);
// console.log("My age is: " + myAge);

// console.log("Logo: " +  logo);

// -------------------------------------------------
// var person2 = new Person();
// person2.id = 2;
// person2.name = "uyn.ptt";
// person2.address = "ĐL";

// person2.setId(2);
// person2.setname("Uyn");
// person2.setaddress("Đắk Lắk");

var person2 = new Person(2, "Ân", "ĐN");
// console.log("Thông tin của person2 là: ");
// console.log("ID:" + person2.id);
// console.log("Name:" + person2.name);
// console.log("Address:" + person2.address);

// console.log("Id:" + person2.id +
//             "Name:" + person2.name +
//             "Address:" + person2.address);

// console.log(`ID: ${person2.id}
//             Name: ${person2.name}
//             Address: ${person2.address}
// `);

// console.log(`ID: ${person2.getID()}
//             Name: ${person2.getName()}
//             Address: ${person2.getAddress()}
//         `);

person1.goVTI();
person2.goVTI();

// Sử dụng hàm toString
console.log(`Thông tin person1: ${person1.toString()}`);
console.log(`Thông tin person2: ${person2.toString()}`);
