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
      setBalance(newBalance);


      //1- history - container ke niye asbo
      const history = document.getElementById("history-container");

      // 2 new div create korbo
      const newHistory = document.createElement('div');

      // 3 - new div innerHtml add korbo

      const { time, date } = currentTime();
      newHistory.innerHTML = `
  
    <div class="transaction-card p-5 bg-base-100  rounded-lg mb-4">

         <div class="payment-card flex gap-3">

            <div class="bg-base-300 p-3 rounded-full">
                <img src="./assets/opt-1.png" alt="">
            </div>

            <div>
                <h3>Add Money ${amount}TK , <span> from : ${accno}</span></h3>
                <span>Today ${time}</span>
                <span>Date: ${date}</span>
            </div>
         </div>
            
     </div>

     
      
      `;





      // 4 history container e newDiv appen korbo
      history.append(newHistory);


    }else{
        alert('invalid pin');
        return;
    }
   
})