const difference = (x, y) => x - y;
const multiply = (first, second, third) => first * second * third;


//one parameter
const getAge = (person) => person.age;
const student = {name : 'ananta', age:45};
const age = getAge(student);
console.log(age);

const getThird = (numbers) => numbers[2];
const third = getThird([1,2,3,4,5]);;
console.log(third);

const doubleInt = (num) => num * 2;


//no parameter
const getPI = () => Math.PI;
console.log(getPI());

//large arrow function. if you want to get anything returned from this function then you have to use the return keyword
const doMath = (x, y, z) => {
    const sum = x + y + z;
    const mul = x * y * z;
    const result = sum + mul;
    return result;
}
const Resuult = doMath(2,3,4);
console.log(Resuult);