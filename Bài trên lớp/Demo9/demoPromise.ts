// tsc .\demoPromise.ts thêm (--target es6)
// Khai báo
let promiseCallAPI = new Promise(function (resolve, reject) {
// Call API
// Ajax
// Code
// resolve ("Call API success!!");
reject ("Error when load API!! Check again");
});

promiseCallAPI
    .then(
        function(msg_resolve) {
            // Xử lý nếu trả về Resolve 
            console.log("Xử lý nếu trả về Resolve");
            console.log(msg_resolve);
        }, 
        function(msg_reject) {
            // Xử lý nếu trả về Reject  
            console.log("Xử lý nếu trả về Reject");
            console.log(msg_reject);
        }
    // ).then (

    // ).then (
    )
    .catch(function (err) { 

    });
