document.getElementById('login-btn').addEventListener('click' , function(){
    // 1. Get the mobile number
    const numberInput = document.getElementById("input-number");
    const contactNumber = numberInput.value;

    // 2. get the pin
    const inputPin = document.getElementById('input-pin');
    const pin = inputPin.value;


    // 3. match pin and mobile number
    if(contactNumber == "01701035894" && pin == '1234'){
        // 3-1 true::: alert > homepage
        window.location.replace('../home.html');

    }else{
        // 3-2 false::: alert > return 
        alert('Login Failed');
        return;
    }
    
    
} )