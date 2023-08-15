/*
1. add event listener to the deposit button
2. get deposit amount from the deposit input field
2-5. convert string deposit amount to a number type
3.clear the deposit input field after getting the value

4. get the previous deposit value
5. calculate new deposit total and set the value to the depositTotalElement
6. get current balance
77. calculate the new balance and set it to the balance total element
*/

//step-1:
document.getElementById('btn-deposit').addEventListener('click', function(){
    const depositField = document.getElementById('deposit-filed');
    //Step-2:
    const newDepositAmountString = depositField.value;
    //Step-2-5:
    const newDepositAmount = parseFloat(newDepositAmountString);

    //step-3:
    depositField.value = '';

    //step-4:
    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);

    //step-5:
    const newDepositTotal = previousDepositTotal + newDepositAmount;
    depositTotalElement.innerText = newDepositTotal;

    //step-6
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);
    
    //step-7
    const newBalanceTotal = previousBalanceTotal + newDepositAmount;
    balanceTotalElement.innerText = newBalanceTotal;
})