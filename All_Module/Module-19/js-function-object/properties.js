var shoppingCart = {
    books: 3,
    sunglass: 1,
    keyboard: 5,
    mouse: 1,
    pen: 25
}
console.log(shoppingCart);

//when you know the specific property name, uuse dot notation to the get the property value
var penCount = shoppingCart.pen;
//altwernative way
var penCount2 = shoppingCart['pen'];
console.log(penCount2);
//get dynamically properties valuue
var propertyName = 'mouse';
var propertyValue = shoppingCart[propertyName];
// console.log(propertyName, propertyValue);

///get object keys
var propertties = Object.keys(shoppingCart);
// console.log(propertties);

//GET properties values
var propertiesValue = Object.values(shoppingCart);
// console.log(propertiesValue);


//set property values
shoppingCart.mouse = 15;
console.log(shoppingCart);

//2nd way set properties
shoppingCart['mouse'] = 29;
console.log(shoppingCart);

//3rd way set properties
shoppingCart[propertyName] = 35;
console.log(shoppingCart);