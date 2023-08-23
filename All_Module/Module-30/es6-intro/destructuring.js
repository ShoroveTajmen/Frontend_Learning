const actor = {
    name : 'ananta',
    age : 30,
    phone : '07888899999',
    money : 3444444,
}
// if right side is an objecct then left side of destructuring will be object as well
const {phone, age:boyoshhh} = actor
console.log(phone, boyoshhh)

// const phoen = actor.phone;
// const name = actor.name;
// const age = actor.age;


//arrray destructuuring
const numbers = [45,99];
const [first, second] = numbers;
const [x,y] = [12,665];
console.log(x);

// 
function doubleThem(a,b){
    return [a*2, b*2];
}
const [num1, nuum2] = doubleThem(6, 9);
console.log(num1, nuum2)