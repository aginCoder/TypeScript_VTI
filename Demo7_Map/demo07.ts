let number = [1, 3, 5, 7, 9];
console.log(number);

// Bạn hãy tạo ra 1 mảng mới mà phần tử trong mảng mới này
// Bằng phần tử mảng number bên trên + 5 đơn vị

// =============================================
let number_new: Number[] = [];
number.forEach((num) => {
    let num_new = num + 10;
    number_new.push(num_new);
})
console.log(`number_new: ${number_new}`);

// =============================================
let newNumber = number.map(n => n + 5);
console.log(`new number: ${newNumber}`);
