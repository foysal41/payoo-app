document.getElementById('send-money-btn').addEventListener("click" , function(){
    const personalNumber = getValueFromInput('send-money-number')
    if(personalNumber.length != '11'){
        alert('Please insert 11 digit of number');
        return;
    }





    const sendMoneyAmount = getValueFromInput('send-money-amount');
    
 
    //get current balance and calculate balance
    const currentBalance =  getBalance();
    const newBalance = currentBalance - Number(sendMoneyAmount);
   if(newBalance < 0){
    alert('invalid amount')
    return;
   }
   

    const pin = getValueFromInput('send-money-pin');
   if(pin == '1234'){
    alert("Send money amount sent")
    setBalance(newBalance);

    
         //1- history - container ke niye asbo
         const history = document.getElementById('history');

        // 2 new div create korbo
        const newHistory = document.createElement('div');

        // 3 - new div innerHtml add korbo
         const { time, date } = currentTime();
        newHistory.innerHTML = `
             <div class="transaction-card p-5 bg-base-100 mb-4">
       <div class="payment-card flex gap-3">

            <div class="bg-base-300 p-3 rounded-full">
                <img src="./assets/opt-3.png" alt="">
            </div>

            <div>
                <h3>Send Money ${sendMoneyAmount}TK , <span> from : ${personalNumber}</span></h3>
                <span>Today ${time}</span>
                <span>Date: ${date}</span>
            </div>
         </div>
            
     </div>

        
        `


        // 4 history container e newDiv appen korbo

        history.append(newHistory);






   }else{
    alert('invalid amount')
    return;
   }
   
    
   
})