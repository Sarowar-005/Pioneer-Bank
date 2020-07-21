var loginBtn = document.getElementById("login");
loginBtn.addEventListener("click", function(){
    const userEmail = document.getElementById("userEmail").value;
    const userPass = document.getElementById("userPass").value;
    if(userEmail == "Sarowar" && userPass == 2233){
        const loginArea = document.getElementById("login-area");
        loginArea.style.display = "none";
        const transactionArea = document.getElementById("transaction-area");
        transactionArea.style.display = "block"
    }else{
        alert("Wrong user or password")
    }
});


//Deposit button event handler
var depositBtn = document.getElementById("deposit-btn");
depositBtn.addEventListener("click", function(){
    var depositNumber = getInput("deposit-amount")
    updateAmount("current-deposit", depositNumber);
    updateAmount("current-balance", depositNumber)
    document.getElementById("deposit-amount").value= "";
});

//Withdraw button event handler
var withdrawBtn = document.getElementById("withdraw-btn");
withdrawBtn.addEventListener("click", function(){

    var withdrawNumber = getInput("withdraw-amount");
    updateAmount("current-withdraw", withdrawNumber);
    updateAmount("current-balance", -1 * withdrawNumber)
})

function getInput(id){
    const amount = document.getElementById(id).value;
    var amountNumber = parseFloat(amount);
    return amountNumber;
}
function updateAmount(id,depositNumber){
    const amount = document.getElementById(id).innerText;
    const amountNumber = parseFloat(amount);
    var total = depositNumber + amountNumber;
    document.getElementById(id).innerText = total;
}