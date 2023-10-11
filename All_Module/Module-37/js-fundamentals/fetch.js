// 1. JSON
const student = {
    name: 'sakib kkhan',
    age: 32,
    movies: ['king', 'priyotoma', '1 takar kabin']
}

// convert to json
const stuudentJSON = JSON.stringify(student);
// console.log(student);
// console.log(stuudentJSON);

// convert json to js
const studentObj = JSON.parse(stuudentJSON);
// console.log(studentObj);


// 2. fetch
// fetch('url')
// .then(res => res.json())
// .then(data => console.log(data));

// kkeys, values
// const keys = Object.keys(student);
// const values = Object.values(student);

// for
const numbers = [23, 54, 67, 87, 23, 78];
numbers.forEach(num => console.log(num));
numbers.map(num => num * 2);

// for of on array likke object
// loop on an object using for in

//add or remove from an array
const products = [
    {name: 'laptop', price: 32000, brand: 'lenovo', color: 'silver'},
    {name: 'phone', price: 7000, brand: 'iphone', color: 'golden'},
    {name: 'watch', price: 3000, brand: 'casio', color: 'yellow'},
    {name: 'sunglass', price: 300, brand: 'ribon', color: 'black'},
    {name: 'camera', price: 9000, brand: 'canon', color: 'black'}
]

const newProduct = {name: 'webcam', price: 700, brand: 'Lal'};

//copy products array and then add newProduct
const newProducts = [...products, newProduct];
console.log(newProducts);

//create a new array without one specific item
// remove phone means create a new array withouut the phone
const remaining = products.filter(p => p.name !== 'phone')
console.log(remaining);