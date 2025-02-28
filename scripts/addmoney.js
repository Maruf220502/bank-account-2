document.getElementById('add-money')
.addEventListener('click', function(event){
    event.preventDefault();
    const amount = getInputValueByID("amount-number");
    const pin = getInputValueByID("pin");
    const account = document.getElementById('account-number').value;

    const mainBalance =getInnerTextByID('main-balance');

    if(account.length === 11){
        if(pin === 1234){
            if(!isNaN(amount) && amount > 0){
                const sum = mainBalance + amount;
            // document.getElementById('main-balance').innerText = sum;
            setInnerTextByIDandValue("main-balance",sum)
            }
            else{
                alert('put some positive amount of money')
            }
        }
        else{
            alert('pin thik nai')
        }
    }
    else{
        alert('account number thik nai')
    }
})