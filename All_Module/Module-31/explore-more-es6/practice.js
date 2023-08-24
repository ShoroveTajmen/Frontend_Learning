//1.
// function evenNumber(oddArr){
//     const evenArr = [];
//     for (const num of oddArr) {
//         const value = num + 1;
//         evenArr.push(value);      
//     }
//     return evenArr;
// }
// const oddArr = [1,3,5,7,9];
// const result = evenNumber(oddArr);
// console.log(result);



//using array.mapp()
// const oddArr = [1,3,5,7,9];
// const evenArr = oddArr.map(num => num + 1);
// console.log(evenArr);


//2.
// const arr = [33,50,79,78,900,101,30];
// const selected = arr.filter(p => p % 10 === 0);
// const selected2 = arr.find(p => p % 10 === 0);
// console.log(selected);
// console.log(selected2);

//3.
// const instructor = [
//     {name: 'Nodi', age:28, position: 'Senior'},
//     {name: 'Akkhi', age:26, position: 'Junior'},
//     {name: 'Nila', age:30, position: 'Senior'},
// ]

// const instructorName = instructor.filter(insName => insName.position === 'Senior');
// console.log(instructorName);


//4.
const people = [
    {name: 'Meena', age: 20},
    {name: 'Rina', age: 15},
    {name: 'Suchorita', age: 22},
]
const sumAge = people.reduce((previous, current) => previous + current.age, 0)
console.log(sumAge);



