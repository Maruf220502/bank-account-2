document.getElementById('cash-out').style.display= 'none'
// document.getElementById('add-taka').style.display= 'block'

// document.getElementById('cash-out-box')
// .addEventListener('click', function(event){
//     event.preventDefault();
//     document.getElementById('cash-out').style.display= 'block'
//     document.getElementById('add-taka').style.display= 'none'
// })
// document.getElementById('add-money-box')
// .addEventListener('click', function(event){
//     event.preventDefault();
//     document.getElementById('cash-out').style.display= 'none'
//     document.getElementById('add-taka').style.display= 'block'
// })

document.getElementById('cash-out-box').addEventListener("click", function(){
    handlerToggle("cash-out","block")
    handlerToggle("add-taka","none")

})
document.getElementById('add-money-box').addEventListener("click", function(){
    handlerToggle("cash-out","none")
    handlerToggle("add-taka","block")

})