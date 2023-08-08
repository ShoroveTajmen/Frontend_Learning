const shoppingCart = [
    {name: 'shoe', price: 1200, quantity: 2},
    {name: 'shirt', price: 2200, quantity: 5},
    {name: 'pant', price: 3700, quantity: 4},
    {name: 'belt', price: 600, quantity: 3},
]

function totlCost(total){
    let sum = 0;
    for(let i = 0; i < total.length; i++){
        const product = total[i];
        const productTotal = product.price * product.quantity;
        sum = sum + productTotal;
    }
    return sum;
}
const total = totlCost(shoppingCart);
console.log(total);