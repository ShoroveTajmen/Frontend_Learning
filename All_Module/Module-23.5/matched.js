// const numbers = [45, 65, 23, 98, 19];

// for(let i = 0; i<number.length; i++){
//     const number = numbers[i];
//     console.log(number);
// }

//use for of loop which is another way of for loop to traversing array  element
// for (const number of numbers) {
//     console.log(number);
// }

const products = [
    {id: 1, name: 'mobile phone', price: 12000},
    {id: 2, name: 'mobile phone', price: 12000},
    {id: 3, name: 'mobile laptop', price: 12000},
    {id: 4, name: 'mobile phone', price: 12000},
    {id: 5, name: 'mobile laptop', price: 12000},
    {id: 6, name: 'mobile Phone', price: 12000},
]
function getProducts(products, search){
    const matched = [];
    for (const product of products) {
        if(product.name.toLowerCase().includes(search.toLowerCase())){
            matched.push(product);
        }
        
    }
    return matched;

}
const result = getProducts(products, 'laptop');
console.log(result);

