///1. hhow to declare a varibale using let and const
const fatherName = 'belayet';
let season = 'rainy';
season = 'winter';


//2. conditiiions
// 6 bbasic conditions: >,<, ===, !==, <=, >=
//multiple conditions: &&, ||

if(fatherName === 'belayet' || season === 'rainy'){

}else if(fatherName === 'belayet'){

}else{

}


// 3. Array
// index
// length, push
const numbers = [89, 35, 98, 12];
// using index set new value of [0] index
numbers[0] = 46;

// 4. for loop, while loop
for(let i = 0; i<numbers.length; i++){
    const number = numbers[i];
    console.log(number);
}

// 5. fuunction
function multiply(num1, num2){
    const resuult = num1 * num2;
    return resuult;
}
const output = multiply(2,3);
console.log(output);

// 6. object
// 3 ways to  access property by name
const student = {
    name: 'sakib kkhan',
    age: 32,
    movies: ['king', 'priyotoma', '1 takar kabin']
}

console.log(student.age); /// direct by property
console.log(student['age']); //access via property name string
const myVar = 'age';
console.log(student[myVar]); // access via property name in a variable

