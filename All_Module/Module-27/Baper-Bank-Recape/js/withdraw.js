/*
1. add even handler with the withdraw button
2. get the withdraw amount
3. clear the withdraw input field
4. get the previous withdraw total
5. calculate total withdraw total amount and set it to the withdraw element
6. get the previous balance
7. calculate new balance and set it to the balance eelement
*/

//step-1:
document.getElementById('btn-withdraw').addEventListener('click', function(){
   //step-2:
   const withdrawFiled = document.getElementById('withdraw-field');
   const newWWithdrawAmountString = withdrawFiled.value;
   const newWWithdrawAmount = parseFloat(newWWithdrawAmountString);  

   //step-3:
   withdrawFiled.value = '';

   //step-4:
   const withdrawTotalElement = document.getElementById('withdraw-total');
   const previousWithdrawTotalString = withdrawTotalElement.innerText;
   const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);

   //step-5:
   const newWithdrawTotal = previousWithdrawTotal + newWWithdrawAmount;
   withdrawTotalElement.innerText = newWithdrawTotal;

   //stepp-6
   const balanceElement = document.getElementById('balance-total');
   const previousBalanceTotalString = balanceElement.innerText;
   const previousBalanceTotal = parseFloat(previousBalanceTotalString);

   //step-7:
   const newBalanceTotal = previousBalanceTotal - newWWithdrawAmount;
   balanceElement.innerText = newBalanceTotal;


})