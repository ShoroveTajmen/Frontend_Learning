//practice 01
// function foo(){
//     console.log('foo');
//     bar();
// }
// function bar(){
//     console.log('bar');
// }
// foo();

//Practice 02
// function make_avg(num1, num2, num3){
//     var sum = num1 + num2 + num3;
//     var avg = sum / 3;
//     return avg;
// }

// var avgNum = make_avg(10, 20, 30);
// console.log(avgNum);

//practice 03
// function make_avg(numArr) {
//   var arrLength = numArr.length;
//   console.log("Length of the array : " + arrLength);
//   var sum = 0;
//   for (var i = 0; i < arrLength; i++) {
//     sum += numArr[i];
//   }
//   var avgMark = sum / arrLength;
//   return avgMark;
// }
// var numArr = [10, 20, 30, 40, 50];
// var avgNum = make_avg(numArr);
// console.log("avg number : " + avgNum);


//Practice 04
//has return + has parameter
/*
function odd_even(num){
    if(num % 2 == 0){
        return true;
    }else{
        return false;
    }
}
var num = 3;
var result = odd_even(num);
console.log(result); */

//no return + has parameter
/*
function odd_even(num){
    if(num % 2 == 0){
        console.log('even number');
    }else{
        console.log('odd number');
    }
}
var num = 3;
var result = odd_even(num); */


//practice 05
//1st way using if else
/*
function trafficSignnal(signalColor){
    if(signalColor === 'red'){
        console.log('youuu are in danger');
    }else if(signalColor === 'yellow'){
        console.log('Stop right now');
    }else if(signalColor === 'green'){
        console.log('Cross the road');
    }else{
        console.log('do wahtever you want');
    }
}
var signalColor = 'green';
var result = trafficSignnal(signalColor); */

//using switch case
var signal = 'yellow';
switch(signal){
    case 'red':
        console.log('youuu are in danger');
        break;  
    case 'yellow':
        console.log('Stop right now');
        break;  
    case 'green':
        console.log('Cross the road');
        break;  
    default:
        console.log('do wahtever you want');  
}
