function cubeNumber(number) {
  if (typeof number !== "number") {
    return "Parameter should be a number";
  } else {
    return number ** 3;
  }
}




function matchFinder(string1, string2) {
  if (typeof string1 !== "string" || typeof string2 !== "string") {
    return "Parameters are should be strings.";
  }
  if (string1.includes(string2)) {
    return true;
  } else {
    return false;
  }
}




function sortMaker(arr) {
  for (let element of arr) {
    if (element < 0) {
      return "Invalid Input";
    }
  }
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] === arr[i + 1]) {
      return "equal";
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
}




function findAddress(obj) {
  const objValues = [];
  const underScore = "__";

  if (obj.street !== undefined) {
    objValues.push(obj.street);
  } else {
    objValues.push(underScore);
  }

  if (obj.house !== undefined) {
    objValues.push(obj.house);
  } else {
    objValues.push(underScore);
  }

  if (obj.society !== undefined) {
    objValues.push(obj.society);
  } else {
    objValues.push(underScore);
  }

  const address = objValues.join(",");
  return address;
}




function canPay(changeArray, totalDue) {
  if (changeArray.length === 0) {
    return "Empty array is not accepted.";
  }
  let sum = 0;
  for (let i = 0; i < changeArray.length; i++) {
    sum = sum + changeArray[i];
  }
  if (sum >= totalDue) {
    return true;
  } else {
    return false;
  }
}
