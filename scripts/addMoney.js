document.getElementById('add-money-btn').addEventListener('click' , function(){
    const bankAccount = getValueFromInput('add-money-bank');
    if(bankAccount == 'Select a bank'){
        alert('Please select a bank');
        return;
    }

    // get bank account number
    const accno = getValueFromInput('add-money-number');
    if(accno.length != 11){
        alert('Invalid account number');
        return;
    }


    // Get amount
    const amount = getValueFromInput('add-money-amount');
    const currentBalance = getBalance();
    const newBalance = currentBalance + Number(amount);
  

    const pin = getValueFromInput('add-money-pin')
    if(pin == '1234'){
        alert(`Add Money Success from ${bankAccount} 
            at ${new Date()})`);
      setBalance(newBalance);

    }else{
        alert('invalid pin');
        return;
    }
   
})