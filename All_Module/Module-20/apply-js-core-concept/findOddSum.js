function getSumOfArray(numbers) {
  var sum = 0;
  for (var i = 0; i < numbers.length; i++) {
    var index = i;
    const element = numbers[index];
    sum = sum + element;
  }
  return sum;
}

function getSumOfOddArray(numbers) {
  var oddNumbers = [];
  for (var i = 0; i < numbers.length; i++) {
    var index = i;
    const element = numbers[index];
    if (element % 2 !== 0) {
        console.log(index, element);
        oddNumbers.push(element);
    }
  }
  return oddNumbers;
}
const myNum = [12, 65, 45, 78, 32, 45, 91];
var oddNum = getSumOfOddArray(myNum);
console.log(oddNum);
const oddNumSum = getSumOfArray(oddNum);
console.log('odd num sum is: ' +oddNumSum);
