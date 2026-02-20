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
    const history = document.getElementById('history');

    addMoney.classList.add('hidden');
    cashout.classList.add('hidden');
    history.classList.add('hidden');


    const selected = document.getElementById(id);
    selected.classList.remove('hidden');
}