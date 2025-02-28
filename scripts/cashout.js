document.getElementById("cash-out-btn")
.addEventListener("click", function(event){
    event.preventDefault();

    const agentNumber = document.getElementById("agent-number").value;

    const amount = getInputValueByID("cash-out-amount");
    const pinNumber = getInputValueByID("cash-out-pin");

    const mainBalance = getInnerTextByID("main-balance");

    if(agentNumber.length === 11){
        if(pinNumber === 1234){
            if(amount>0){
                if(mainBalance> amount){
                    const sum = mainBalance - amount;
                    setInnerTextByIDandValue("main-balance", sum);
                }
                else{
                    alert("You have not sufficient balance")
                }
            }
            else{
                alert("enter some amount")
            }
        }
        else{
            alert("Enter valid pin number")
        }
    }
    else{
        alert("Your agent Number is not right")
    }
})