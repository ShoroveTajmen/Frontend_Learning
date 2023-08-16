/*
1. select apply button and add event listener
2. select the input field 
3. get the input field string value
4. convert the string value into number
5. clear the field value
6. calculate the discount priice
7. select the please pay portion

*/

//step-1:
document.getElementById("btn-apply").addEventListener("click", function () {
  //step-2:
  const inputField = document.getElementById("input-field");
  //step-3:
  const inputFieldValueString = inputField.value;
  //step-4:
  const inputFieldValue = parseFloat(inputFieldValueString);
  //step-5:
  inputField.value = "";
  //step-7:
  const haveToPayElement = document.getElementById("amount");
  const haveToPayString = haveToPayElement.innerText;
  const haveToPay = parseFloat(haveToPayString);

  //sttep-6:
  const discountPriice = inputFieldValue - inputFieldValue * (30 / 100);

  const payValue = haveToPay + discountPriice;
  haveToPayElement.innerText = payValue;
});
