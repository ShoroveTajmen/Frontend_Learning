// 1. array destructuring
const numbers = [42, 65];
// const x = numbers[0];
// const y = numbers[1];

// but destructured be likke
// const [x,y] = [42, 65]
//alternative
const [x, y] = numbers;

function boxify(num1,num2){
    const nums = [num1, num2];
    return nums;
}
// const [first, secondd] = [90, 34]
 const [first, secondd] = boxify(90, 34);
// console.log(boxify(90,34));

const student = {
    name: 'sakib kkhan',
    age: 32,
    movies: ['king', 'priyotoma', '1 takar kabin']
}
const [firstMovie, secondMovie] = student.movies;



// object destruccturing
const {name, age} = {name: 'alu', age: 14};

const employee = {
    ide: 'vs code',
    designation: 'developer',
    machine: "mac",
    languages: ['html', 'css', 'js'],
    specification: {
        height: 66,
        weight: 67,
        adddress: 'kumarkhali',
        drink: 'speeed',
        watch: {
            color: 'black',
            price: 500,
            brand: 'garmin'
        }
    }
}
const { machine, ide} = employee ;
const { weight, adddress} = employee.specification;
const {brand} = employee?.specification?.watch;