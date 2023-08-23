//function declaration



// function add(a,b){
//     const result = a + b;
//     return result;
// }
// const sum = add(5,900);
function add(a,b){
    return a+b;
}


//fuunction expression --> store function in a variable
const add2 = function(a,b){
    return a+b;
}
const sum = add2(5,900);
console.log(sum);


//arrow function
const add3 = (a,b) => a+b;
const sum3 = add3(5,900);
console.log(sum3);
