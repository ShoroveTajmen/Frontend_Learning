//map ==> loops through each element of the array and do the operation that you passed in the call back ffunction and hold the result from each operation in an array and finally returns you the array



const numbers = [12, 10, 8, 15, 7];

const doubled = numbers.map(num => num * 2);
console.log(doubled);

const fiveBonus = numbers.map(num => num + 5);
console.log(fiveBonus);

const halves = numbers.map(num => num / 2);
console.log(halves);

const friends = ['tomm', 'john', 'michale', 'oliver'];
const lengths = friends.map(frnd => frnd.length);
// console.log(lengths);
const firstLetter = friends.map(frnd => frnd[0]);
console.log(firstLetter);