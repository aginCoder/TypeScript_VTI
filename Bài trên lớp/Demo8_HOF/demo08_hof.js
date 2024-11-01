// Xây dựng chương trình tính toán (máy tính)
// Hàm tính tổng
var sum = function (a, b) { return a + b; };
// Hàm tính hiệu
var minus = function (a, b) { return a - b; };
// Hàm tính tích
var multiply = function (a, b) { return a * b; };
// Hàm tính thương
var divided = function (a, b) { return a / b; };
// Sử dụng các hàm
var sum_a_b = sum(10, 20);
console.log("T\u1ED5ng 2 s\u1ED1: ".concat(sum_a_b));
var minus_a_b = minus(75, 35);
console.log("Hi\u1EC7u 2 s\u1ED1: ".concat(minus_a_b));
var multiply_a_b = multiply(20, 8);
console.log("T\u00EDch 2 s\u1ED1: ".concat(multiply_a_b));
var divided_a_b = divided(100, 25);
console.log("Th\u01B0\u01A1ng 2 s\u1ED1: ".concat(divided_a_b));
// 
var calculate = function (a, b, f) {
    var result = f(a, b);
    console.log("K\u1EBFt qu\u1EA3 c\u1EE7a ph\u00E9p t\u00EDnh l\u00E0: ".concat(result));
};
// 
console.log("Sử dụng hàm calculate");
calculate(20, 30, sum);
calculate(20, 30, minus);
calculate(20, 30, multiply);
calculate(20, 30, divided);
