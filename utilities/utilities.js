function getInputValueByID(id){
    const value = document.getElementById(id).value;
    const convertedValue = parseFloat(value);
    return convertedValue;
}

function getInnerTextByID(id){
    const value = document.getElementById(id).innerText;
    const convertedValue = parseFloat(value);
    return convertedValue;
}

function setInnerTextByIDandValue(id, value){
    document.getElementById(id).innerText = value;
}

// toggle button
function handlerToggle(id,status){
    document.getElementById(id).style.display = status;
}
