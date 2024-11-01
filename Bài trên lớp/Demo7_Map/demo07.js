var number = [1, 3, 5, 7, 9];
console.log(number);
// Bạn hãy tạo ra 1 mảng mới mà phần tử trong mảng mới này
// Bằng phần tử mảng number bên trên + 5 đơn vị
// =============================================
var number_new = [];
number.forEach(function (num) {
    var num_new = num + 10;
    number_new.push(num_new);
});
console.log("number_new: ".concat(number_new));
// =============================================
var newNumber = number.map(function (n) { return n + 5; });
console.log("new number: ".concat(newNumber));
