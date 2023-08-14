/*
1. add event hndler with the withdraw button
2. get the withdraw amount from the input field
2.5. also makke sure to convert the input into a number by using parseFloat
3. get previous withdraw total
4. calculate total withdraw amount
4.5. set total withdraw amount
5. get the previous total balance
6.calculate new balance total
6.5 set the total balance
7. clear the withdraw field
*/

//step-1
document.getElementById("btn-withdraw").addEventListener("click", function () {
  //step-2
  const withdrawField = document.getElementById("withdraw-field");
  const newWithdrawAmountString = withdrawField.value;
  const newWithdrawAmount = parseFloat(newWithdrawAmountString);
  //step-7: cleaaar the withdraw field
  withdrawField.value = "";
  if (isNaN(newWithdrawAmount)) {
    alert("please provide a valid number");
    return;
  }

  //step-3
  const withdrawTotalElement = document.getElementById("withdraw-total");
  const prreviousWithdrawTotalString = withdrawTotalElement.innerText;
  const prreviousWithdrawTotal = parseFloat(prreviousWithdrawTotalString);

  //step-5
  const balanceTotalElement = document.getElementById("balance-total");
  const previousBalanceTotalString = balanceTotalElement.innerText;
  const previousBalanceTotal = parseFloat(previousBalanceTotalString);

  if (newWithdrawAmount > previousBalanceTotal) {
    alert("Baap er bank e eto tk nai");
    return;
  }

  //step-4
  const currentWithdrawTotal = prreviousWithdrawTotal + newWithdrawAmount;
  withdrawTotalElement.innerText = currentWithdrawTotal;

  //step-6
  const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
  balanceTotalElement.innerText = newBalanceTotal;
});
