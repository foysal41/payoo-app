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
     document.getElementById('balance').innerText = newBalance;
     balance.innerText = value;
}