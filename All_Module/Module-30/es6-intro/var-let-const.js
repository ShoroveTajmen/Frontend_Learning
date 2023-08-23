//let : allow it to reassign
//const: do not allow to reassign

const money = 25; 
// this is not allowed to do : money = 30;

const rich = money + 25; //this can be rigght
console.log(rich);

const arr = [3,4,5,6,7];
// this is not working ::: arr = [4,5,6];
arr.push(4,5,6); //this is working
console.log(arr);

const student = {
    name : 'shorove',
    age : 23,
    department : 'cse',
}

//thhis is not workingg
// student = {
//     name: "kakoli";
// }

student.name = "dibaa"; //this is working
console.log(student);