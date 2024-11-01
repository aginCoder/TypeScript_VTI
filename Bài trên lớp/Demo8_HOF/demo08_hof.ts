// Xây dựng chương trình tính toán (máy tính)
// Hàm tính tổng
let sum = (a: number, b: number) => a + b;
// Hàm tính hiệu
let minus = (a: number, b: number) => a - b;
// Hàm tính tích
let multiply = (a: number, b: number) => a * b;
// Hàm tính thương
let divided = (a: number, b: number) => a / b;

// Sử dụng các hàm
let sum_a_b = sum(10, 20);
console.log(`Tổng 2 số: ${sum_a_b}`);
let minus_a_b = minus(75, 35);
console.log(`Hiệu 2 số: ${minus_a_b}`);
let multiply_a_b = multiply(20, 8);
console.log(`Tích 2 số: ${multiply_a_b}`);
let divided_a_b = divided(100, 25);
console.log(`Thương 2 số: ${divided_a_b}`);

// 
let calculate = (a:number, b:number, f) => {
    let result = f(a, b);
    console.log(`Kết quả của phép tính là: ${result}`);
}

// 
console.log("Sử dụng hàm calculate");

calculate(20, 30, sum);
calculate(20, 30, minus);
calculate(20, 30, multiply);
calculate(20, 30, divided);

