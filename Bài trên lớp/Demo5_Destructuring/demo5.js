//
var student = {
    id: 1,
    name: "Ân",
    address: "Đak Lak",
    // 100...
};
// let v_id = student.id;
// let v_name = student.name;
// let v_address = student.address;
// Destructuring
// let { id: v_id} = student;       // let v_id = student.id
// let { id: v_name} = student;       // let v_id = student.name
// let { id: v_address} = student;       // let v_id = student.address
var v_id = student.id, v_name = student.name, v_address = student.address;
console.log("ID: ".concat(v_id));
console.log("Name: ".concat(v_name));
console.log("Address: ".concat(v_address));
// Array
var Railway85 = ["Ân", "Quân", "Vũ"];
// let v_name1 = Railway85[0];
// let v_name2 = Railway85[1];
// let v_name3 = Railway85[2];
var v_name1 = Railway85[0], v_name2 = Railway85[1], v_name3 = Railway85[2];
console.log("Railway[0]: ".concat(v_name1));
console.log("Railway[1]: ".concat(v_name2));
console.log("Railway[2]: ".concat(v_name3));
