/*
8 ways to find undefined
1. variable that is not initialized will give undefined
2. function with no return will give undefined
3. parameter that is not passed will be undefined
4. if return has nothing on the right side wwill return undefined
5. property that doesn't exists on an object will givve you undefined
6. accessing array elements outside of the index range will give you undefined
7. deleting an element inside an array
8. set a value directly to undefined
*/

// let first;
// console.log(first);


// function second(a, b){
//     const total = a+b;
// }
// const result = second();
// console.log(result);


// function third(a,b,c,d){
//     const total = a+b+c+d;
//     console.log(a,b,c,d);
// }
// third(2, 5);


// function noNegative(a,b){
//     if(a < 0 || b < 0){
//         return
//     }
//     return a+b;
// }
// const result = noNegative(2,-5);
// console.log(result);


// const fifth = {
//     id:2,
//     name: 'ponchom',
//     age: 40,
// }
// console.log(fifth.age, fifth.salary);


// const sixth = [4,89,87,56,54];
// console.log(sixth[1], sixth[5], sixth[200]);

// const sixth = [4,89,87,56,54];
// //you should not do it. Instead use splice
// delete sixth[1];
// console.log(sixth[1], sixth[5], sixth[200]);
// console.log((sixth))

const eight = undefined;
console.log(eight);

//use 
const nineth = null;
const data = {resilts: 'jj', updated: null}

console.log(typeof undefined);
console.log(typeof null);