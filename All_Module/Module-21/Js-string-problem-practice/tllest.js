function minInArray(number) {
  let smallNum = number[0];
  for (let i = 0; i < number.length; i++) {
    const element = number[i];
    if (element < smallNum) {
      smallNum = element;
    }
  }
  return smallNum;
}
const heights = [167, 190, 120, 165, 137, 265];
const smallest = minInArray(heights);
console.log("smallest person is: ", smallest);
