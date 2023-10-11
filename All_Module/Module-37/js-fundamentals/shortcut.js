// 'almas', 5, true, {}, []
// '', 0, false, null, undefined

//check truthy
let myVar = 5;
if(myVar) {
    myVar = myVar * 100;
}else{
    myVar = 0;
}

let myMoney = '';
if(!myMoney){
    // console.log('dddddddddd');
}


const money = 80;
let food;
if(money > 100){
    food = 'biriyani';
}else{
    food = 'cha biscuit';
}

//ternary
let food1 = money > 100 ? 'biriyani' : 'cha biscuuit';
// console.log(food1);

//number to string convertiion
const num1 = 52;
// console.log(num1);
const numString = num1 + '';
// console.log(numString);


//stringg to number
const input = '500';
const inputNum = +input;
console.log(inputNum);


//
let isActive = true;
const showUser = () => console.log('display user')
const hideUser = () => console.log('hide user')
isActive ? showUser() : hideUser();
isActive && showUser();
isActive || hideUser();

isActive = !isActive;  //toggggle boolean kore

