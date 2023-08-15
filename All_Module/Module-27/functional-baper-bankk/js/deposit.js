document.getElementById("btn-deposit").addEventListener("click", function () {
  /*
    1. get the element by id
    2. get the value from the element
    3. convert string value to a number
    */
  const newDepositAmount = getInputFieldValueById("deposit-filed");
  /*
    1. get prevvious deposit total by id
    */
  const previousDepositTotal = getElementValueById("deposit-total");
  //new deposit tottal
  const newDepositTotal = previousDepositTotal + newDepositAmount;
  setTextElementValueById("deposit-total", newDepositTotal);

  //get previous balance by using the function
  const previousBalanceTotal = getElementValueById("balance-total");
  const newBalanceTotal = previousBalanceTotal + newDepositAmount;
  setTextElementValueById("balance-total", newBalanceTotal);
});
