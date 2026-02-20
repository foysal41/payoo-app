document.getElementById("cashout-btn").addEventListener('click' , function(){
     //1. Get the agent number
    const cashoutNumber = getValueFromInput('cashout-number');

     if(cashoutNumber.length != 11){
         alert('Invalid Agent Number');
         return;
     }

     //2. get the amount,
    const cashoutAmount = getValueFromInput('cashout-amount');


    //3. get the current balance
    const balacneElement = document.getElementById("balance");
    const balance = balacneElement.innerText;

    const currentBalance = getBalance();


    //4. calculate balance
    const newBalance = currentBalance - Number(cashoutAmount);
    if(newBalance < 0 ){
        alert('Invalid Amount');
        return;
    }

    const pin = getValueFromInput("cashout-pin");
    if(pin === '1234'){
        setBalance(newBalance)
       //document.getElementById('balance').innerText = newBalance;

       //1- history - container ke niye asbo
      const history = document.getElementById("history-container");

      // 2 new div create korbo
      const newHistory = document.createElement('div');

      // 3 - new div innerHtml add korbo

      const { time, date } = currentTime();
      newHistory.innerHTML = `
      <div class="transaction-card p-5 bg-base-100 mb-4">
       <div class="payment-card flex gap-3">

            <div class="bg-base-300 p-3 rounded-full">
                <img src="./assets/opt-2.png" alt="">
            </div>

            <div>
                <h3>Cash Out ${cashoutAmount}TK , <span> from : ${cashoutNumber}</span></h3>
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
    }

})












