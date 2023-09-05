const products = [
    {name: 'laptop', price: 32000, brand: 'lenovo', color: 'silver'},
    {name: 'phone', price: 7000, brand: 'iphone', color: 'golden'},
    {name: 'watch', price: 3000, brand: 'casio', color: 'yellow'},
    {name: 'sunglass', price: 300, brand: 'ribon', color: 'black'},
    {name: 'camera', price: 9000, brand: 'canon', color: 'black'}
]

//map returns a array
const brands = products.map(product => product.brand);
// console.log(brands);
const prices = products.map(prices => prices.price);
// console.log(prices);

//forEach don't return anything
// products.forEach(product => console.log(product.color));
// products.forEach(product => console.log(product));
products.forEach(product => {

})

// filter => jara condition fullfill korbe oigula return krbe array hisebe
const cheap = products.filter(product => product.price <= 5000);
console.log(cheap);

const specificName = products.filter(product => product.name.includes('n'));
console.log(specificName);

// find -- same as filter but return first matching value
const special = products.find(product => product.name.includes('n'));
console.log(special);