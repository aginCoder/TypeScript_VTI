// Viết function tính tổng 2 số
// cách 1
function sum(a, b) {
    return a + b;
}
// cách 2
var sum2 = function sum2(a, b) {
    return a + b;
};
// cách 3: Arrow function
var sum3 = function (a, b) {
    return a + b;
};
// Cách 4
var sum4 = function (a, b) { return a + b; };
// In ra
console.log("Total: ".concat(sum(10, 20)));
console.log("Total: ".concat(sum2(10, 20)));
console.log("Total: ".concat(sum3(10, 20)));
console.log("Total: ".concat(sum4(10, 20)));
