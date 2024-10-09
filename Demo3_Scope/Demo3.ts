// Global Scope
var myName = "an.pg";


console.log(myName);

// function x
function x() {
    console.log(myName);
    // local scope
    var myAge = 20;
    console.log(myAge);
}

// console.log(myAge);
// function y
function y() {
    console.log(myName);
    // console.log(myAge);
}
