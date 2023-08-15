function getInputFieldValueById(inputFieldId){
    const inputField = document.getElementById(inputFieldId);
    const inputFieldValueString = inputField.value;
    const inputFieldValue = parseFloat(inputFieldValueString);
    inputField.value = '';
    return inputFieldValue;
}
function getElementValueById(elementId){
    const element = document.getElementById(elementId);;
    const elementValueString = element.innerText;
    const elementValue = parseFloat(elementValueString);
    return elementValue;
}

document.getElementById('btn-deposit').addEventListener('click', function(){
    /*
    1. get the element by id
    2. get the value from the element
    3. convert string value to a number
    */
    const newDepositAmount = getInputFieldValueById('deposit-filed');
    console.log(newDepositAmount);
})