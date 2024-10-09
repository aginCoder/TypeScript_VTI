async function callAPICheckEmail(){
    console.log("--- Step1: Check Email ---");
        let data = false;   
    return data;
}

async function callAPICheckUsername(){
    console.log("--- Step1: Check Email ---");
        let data = false;   
    return data;
}

async function callAPICreateNewAccount(){
    console.log("--- Step1: Check Email ---");
        let status = true;   
    return status;
}

function CreateNewAccount(){
    let resultCheckEmail = callAPICheckEmail(); 
    if (!resultCheckEmail){
        return;
    }
    let resultCheckUserName = callAPICheckEmail(); 
    if (!resultCheckEmail){
        return;
    }
    // 
    callAPICreateNewAccount();

    // Gọi hàm 
    CreateNewAccount();
}