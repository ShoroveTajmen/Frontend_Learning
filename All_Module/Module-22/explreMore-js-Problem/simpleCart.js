const shoppingCart = [
    {name: 'shoe', price: 1200},
    {name: 'shirt', price: 2200},
    {name: 'pant', price: 3700},
    {name: 'belt', price: 600},
]

function totlCost(total){
    let sum = 0;
    for(let i = 0; i < total.length; i++){
        const product = total[i];
        sum = sum + product.price;
    }
    return sum;
}
const total = totlCost(shoppingCart);
console.log(total);