//practice : 1

//1.
// const mul = (num1, num2, num3) => num1 * num2 *num3;
// const result = mul(1,2,3);
// console.log(result);

//2.
// const sentence = `I am a web developer.
// I love to code.
// I love to eat biriyani.`
// console.log(sentence);

//3.
// const add = (num1, num2 = 0) => num1 + num2;
// const result = add(1);
// console.log(result);

//practice : 2
//1.
// const fiendsLengthWithEvenLength = (frienndsName) => {
//     const evenLengthFriends = [];
//     for(const names of frienndsName){
//         if(names.length % 2 === 0){
//             evenLengthFriends.push(names);
//         }
//     }
//     return evenLengthFriends;
    
// };
// const frienndsName = ["shorove", "tajmen", "paro"];
// const result = fiendsLengthWithEvenLength(frienndsName);
// console.log(result);



//practice 3:
// const calculation = (numbers) => {
//     let sum = 0;
//     for(const items of numbers){
//         const squareNum = items * items;
//         sum = (sum + squareNum);
//     }
//     sum = sum / 3;
//     return sum.toFixed(2);

// }
// const numbers = [1,2,3];
// const finalResult = calculation(numbers);
// console.log(finalResult);


//practice :: 4

const maxNumber = (arr1, arr2) => {
    const mergeArray = [...arr1, ...arr2];
    const maxNumberr = Math.max(...mergeArray);
    return maxNumberr;

}

const arr1 = [1,2,3,4,5];
const arr2 = [6,7,8,9,10];
const result = maxNumber(arr1, arr2);
console.log(result);