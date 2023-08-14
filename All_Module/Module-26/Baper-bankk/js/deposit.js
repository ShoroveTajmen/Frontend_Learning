// step-1 ;; add event listener to the deposite button
document.getElementById("btn-deposit").addEventListener("click", function () {
  // step-2; get the deposite amount from the deposit input field
  //always remember to use .value to get text from an input field
  const depositeField = document.getElementById("deposit-field");
  const newDepositAmountString = depositeField.value;
  const newDepositAmount = parseFloat(newDepositAmountString);

  //step-7: cleaaar the depoaite field
  depositeField.value = "";
  if (isNaN(newDepositAmount)) {
    alert("please provide a valid number");
    return;
  }

  //step-3; get the current deposit total
  //for non-input(element ottherr than input, textarea) use innerText to get the text
  const depositTotalElement = document.getElementById("deposit-total");
  const previousDepositTotalString = depositTotalElement.innerText;
  const previousDepositTotal = parseFloat(previousDepositTotalString);

  //step-4: add numbers to set the total deposit
  const currentDepositTotal = previousDepositTotal + newDepositAmount;
  //set the deposite total
  depositTotalElement.innerText = currentDepositTotal;

  //step-5: get ballance current total
  const balanceTotalElement = document.getElementById("balance-total");
  const previousBalanceTotalString = balanceTotalElement.innerText;
  const previousBalanceTotal = parseFloat(previousBalanceTotalString);

  //step-6: calculate current total balance
  const currentBalanceTotal = previousBalanceTotal + newDepositAmount;
  //set the total balance
  balanceTotalElement.innerText = currentBalanceTotal;
});
