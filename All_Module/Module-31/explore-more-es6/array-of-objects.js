const products = [
    {id:1, name:'lenovo', price: 650000},
    {id:2, name:'dcl', price: 50000},
    {id:3, name:'mac', price: 560000},
    {id:4, name:'walton', price: 60000},
    {id:5, name:'accer', price: 80000},
]
//map
const names = products.map(product => product.name);
// console.log(names);
const prices = products.map(p => p.price);
console.log(prices);

//forEach
products.forEach(p => console.log(p.id));

//filter
const expensive = products.filter(p => p.price > 50000);
console.log(expensive);

//find
const expensive2 = products.find(p => p.price > 50000);
console.log(expensive2);

//reduce
const total = products.reduce((accum, current) => accum + current.price, 0);
console.log(total);