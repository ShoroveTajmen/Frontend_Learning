/*
1. add withdraw button event handler
2. get withdraw amount by using getInputFieldValueById function
3. get previous withdraw amount by using getTextElementById function
4. CALCULATE new withdraw total and sett the value
5. set new withdraw total by using setTextElementValueById function
6. get previous balance total by using getElementValueById function
7.calculate new balance total
8. set balance total using setTextElementValueById
*/

document.getElementById("btn-withdraw").addEventListener('click', function(){
    const newWithdrawAmount = getInputFieldValueById("withdraw-field");
    const previousWithdrawTotal = getElementValueById("withdraw-total");
    const newWithdrawTTotal = previousWithdrawTotal + newWithdrawAmount;
    setTextElementValueById('withdraw-total', newWithdrawTTotal);
    const previousBalanceTotal = getElementValueById('balance-total');
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    setTextElementValueById('balance-total', newBalanceTotal);
})