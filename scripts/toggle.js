document.getElementById('cash-out').style.display= 'none'
document.getElementById('tansactions-history').style.display= 'none'


document.getElementById('cash-out-box').addEventListener("click", function(){
    handlerToggle("cash-out","block")
    handlerToggle("add-taka","none")
    handlerToggle("tansactions-history","none")

})
document.getElementById('add-money-box').addEventListener("click", function(){
    handlerToggle("cash-out","none")
    handlerToggle("add-taka","block")
    handlerToggle("tansactions-history","none")

})
document.getElementById('transcation-box').addEventListener("click", function(){
    handlerToggle("cash-out","none")
    handlerToggle("add-taka","none")
    handlerToggle("tansactions-history","block")

})