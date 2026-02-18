document.getElementById("cashout-btn").addEventListener('click' , function(){
    //1. Get the agent number and validate
    const cashoutNumberInput = document.getElementById("cashout-number");
    const cashoutNumber = cashoutNumberInput.value;

    if(cashoutNumber.length != 11){
        alert('Invalid Agent Number');
    }

    //2. get the amount, validate, convert to number
    const cashoutAmountInput = document.getElementById("cashout-amount");
    const cashoutAmount = cashoutAmountInput.value;


    //3. get the current balance, validate, convert to number;
    const balacneElement = document.getElementById("balance");
    const balance = balacneElement.innerText;

    //4. calculate new balance
    const newBalance = Number(balance)  - Number(cashoutAmount);
    console.log("new balance" , newBalance);

    if(newBalance < 0){
        alert("invalid amount");
        return;
    }

    const cashoutPinInput = document.getElementById("cashout-pin");
    const pin = cashoutPinInput.value;

    //5. get the pin and verify
    if(pin  === "1234"){
       //5.1 true :: show and alert > set balance  
          balacneElement.innerText = newBalance;
    }else{
        //5.2 false :: show the error alert > return 
        alert('invalid pin')
    }
    
    
    




})