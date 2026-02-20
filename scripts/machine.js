function getValueFromInput(id){
    const input = document.getElementById(id);
    const value = input.value;
    return value;
}

function getBalance(){
    const input = document.getElementById('balance');
    const balance = input.innerText;
    return Number(balance);
}

function setBalance(value){
     document.getElementById('balance').innerText = value;
  
}


//machine id > hide all > show id
function showOnly(id){
    
    const addMoney = document.getElementById('add-money');
    const cashout = document.getElementById('cashout');
    const transfer = document.getElementById('transfer');
    const history = document.getElementById('history');

    addMoney.classList.add('hidden');
    cashout.classList.add('hidden');
    transfer.classList.add('hidden');
    history.classList.add('hidden');


    const selected = document.getElementById(id);
    selected.classList.remove('hidden');
}


// customize time

function currentTime(){

const now = new Date();

const time = now.toLocaleTimeString('en-US' , {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true
});

const date = now.toLocaleDateString('en-GB');

return {time, date};

}