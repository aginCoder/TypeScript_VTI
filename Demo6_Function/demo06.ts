// Viết function tính tổng 2 số
// cách 1
function sum(a, b){
    return a + b;
}

// cách 2
const sum2 = function sum2(a, b){  
    return a + b;
}

// cách 3: Arrow function
const sum3 = (a, b) => {  
    return a + b;
}

// Cách 4
let sum4 = (a, b) => a + b;

 // In ra
console.log(`Total: ${sum(10, 20)}`);
console.log(`Total: ${sum2(10, 20)}`);
console.log(`Total: ${sum3(10, 20)}`);
console.log(`Total: ${sum4(10, 20)}`);
