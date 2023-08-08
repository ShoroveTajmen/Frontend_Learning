/*
function cubeNumber(number) {
  if (typeof number !== "number") {
    return "Parameter should be a number";
  } else {
    if (number < 0) {
      return "Please provide a positive number";
    } else {
      return number ** 3;
    }
  }
}
const cubeNum = cubeNumber(3);
console.log(cubeNum); */


/*
function matchFinder(string1, string2) {
    if(typeof string1 !== "string" || typeof string2 !== "string"){
        return "Parameters are should be strings."
    }
    if(string1.includes(string2)){
        return true;
    }else{
        return false;
    }
}
const subString = matchFinder('Peter Parker','pet');
console.log(subString); */


/*
function sortMaker(arr) {
  for (let element of arr) {
    if (element < 0) {
      return "Invalid Input";
    }
  }
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] !== arr[i + 1]) {
      if (arr[i] < arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
      }
      return arr;
    }
  }
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] === arr[i + 1]) {
      return "equal";
    }
  }
}
const arr = [4, -2];
const result = sortMaker(arr);
console.log(result); */






/*
function canPay(changeArray, totalDue) {
    if(changeArray.length === 0){
        return "Empty array is not accepted."
    }
    let sum = 0;
    for(let i = 0; i<changeArray.length; i++){
        sum = sum + changeArray[i];
    }
    if(sum >= totalDue){
        return true;
    }else{
        return false;
    }
}
const arr = [1,5,5];
const chipsPrice = 10;
const result = canPay(arr, chipsPrice);
console.log(result); */
