const numbers = [89, 35, 98, 12];

const student = {
    name: 'sakib kkhan',
    age: 32,
    movies: ['king', 'priyotoma', '1 takar kabin']
}

// 1. template string
const about = `My Name is ${student.name} age of ${student.age} has number ${student.movies[0]}`;
console.log(about);

// 2. arrow function
const getFiftyFive = () => 55;
// single parameter
const addSixtyFive = num => num + 65;
const isEven = x => x % 2==0;
const addThree = (x,y,z) => x+y+z;
const doMath = (num1, num2) => {
    const add  = num1 + num2;
    return add;
}

// spread operator
//making new array to use sprea operator
const newNumbers = [...numbers];

numbers.push(99);
numbers.push(99);
numbers.push(99);


// create a new array from an older array and add an element
const currentNumbers = [...numbers, 55, 55];

console.log(newNumbers);
console.log(numbers);
console.log(currentNumbers);