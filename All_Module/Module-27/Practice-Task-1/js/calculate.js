/*
1. select apply button and add event listener
2. select the input field 
3. get the input field string value
4. convert the string value into number
5. clear the field value
6. calculate the discount priice
7. select the please pay portion
8.set the disccount price at the haveToPayElement

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
  //sttep-6:
  const discountPriice = inputFieldValue - inputFieldValue * (30 / 100);
  //step-7:
  const haveToPayElement = document.getElementById("amount");
  haveToPayElement.innerText = discountPriice;

});
