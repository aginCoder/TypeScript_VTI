//
let student = {
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

let { id: v_id, name: v_name, address: v_address } = student;       

console.log(`ID: ${v_id}`);
console.log(`Name: ${v_name}`);
console.log(`Address: ${v_address}`);

// Array
let Railway85 = ["Ân", "Quân", "Vũ"];

// let v_name1 = Railway85[0];
// let v_name2 = Railway85[1];
// let v_name3 = Railway85[2];

let [v_name1, v_name2, v_name3] = Railway85;
console.log(`Railway[0]: ${v_name1}`);
console.log(`Railway[1]: ${v_name2}`);
console.log(`Railway[2]: ${v_name3}`);


// let student = {
//     id: 1,
//     name: "Ân",
//     address: "Đak Lak",
//     // 100...
// };
// let student2 = {
//     id: 2,
//     name: "Uyn",
//     address: "Đà Nẵng",
//     gender: false,
//     class: "Railway85",
// };
let student2 = {
    ...student,
    gender: false,
    class: "Railway85",
};

// let Railway85_Update = ["Ân", "Quân", "Vũ", "A", "B"];
let Railway85_Update = [...Railway85, "A", "B"];