// Step1: check Email
// Step2: Check Username
// Step3: CreateNewAccount
function callAPICheckEmail() {
    let promiseCheckEmail = new Promise(function (resolve, reject) {
        console.log("--- Step1: Check Email ---");
        let data = false; // Email đã tồn tại
        if (data) {
            reject("Email đã tồn tại");
        }
        else {
            resolve("Email hợp lệ");
        }
    });
    return promiseCheckEmail;
}
function callAPICheckUsername() {
    let promiseCheckUsername = new Promise(function (resolve, reject) {
        console.log("--- Step1: Check Username ---");
        let data = false; // Email đã tồn tại
        if (data) {
            reject("UserName đã tồn tại");
        }
        else {
            resolve("UserName hợp lệ");
        }
    });
    return promiseCheckUsername;
}
function callAPICreateNewAccount() {
    let promiseCheckCreateNewAccount = new Promise(function (resolve, reject) {
        console.log("--- Step1: Check CreateNewAccount ---");
        let status = true; // Email đã tồn tại
        if (status) {
            resolve("Create New Account success");
        }
        else {
            reject("Create New Account failed");
        }
    });
    return promiseCheckCreateNewAccount;
}
// chạy
callAPICheckEmail()
    .then(function (msg_resolve) {
    console.log(msg_resolve);
    return callAPICheckUsername();
})
    .then(function (msg_resolve) {
    return callAPICreateNewAccount();
})
    .then(function (msg_resolve) {
    console.log(msg_resolve);
})
    .catch(function (msg) {
    console.log(msg);
});
// callAPICheckUsername(); 
// callAPICreateNewAccount();
