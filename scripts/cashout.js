document.getElementById("cash-out-btn")
.addEventListener("click", function(event){
    event.preventDefault();

    const agentNumber = document.getElementById("agent-number").value;

    const amount = getInputValueByID("cash-out-amount");
    const pinNumber = getInputValueByID("cash-out-pin");

    const mainBalance = getInnerTextByID("main-balance");

    const selected = document.getElementById("all-bank").value;

    if(agentNumber.length === 11){
        if(pinNumber === 1234){
            if(amount>0){
                if(mainBalance> amount){
                    const sum = mainBalance - amount;
                    setInnerTextByIDandValue("main-balance", sum);


                    const container = document.getElementById("transaction-container");
                    const div = document.createElement("div")
                      div.innerHTML = `
                      <h1>Cash out</h1>
                      <p>${amount}</p>
                     <p>from this ${agentNumber} account number</p>

                     `
                      container.appendChild(div);

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