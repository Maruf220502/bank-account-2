document.getElementById('btn-login')
.addEventListener('click', function(event){
    event.preventDefault();

    const accountNumber = document.getElementById('account-number').value;

    const pin = document.getElementById('pin-number').value;
    const pinNumber = parseInt(pin);
    // const pin = parseInt(pinNumber)
    if( accountNumber.length === 11){
        console.log('ok');
        if( pinNumber === 1234){    

            window.location.href = "./main.html";
        }
        else{
            alert('kire, pin thik kor')
        }
    }
    else{
        alert('put the right number')
    }
})