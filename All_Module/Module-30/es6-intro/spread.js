const max = Math.max(6,23,45,1,89,23);
const numbers = [3,5,2,45,5,43,90,32,15];
//to get all number from an array using spread operator
const arrayMax = Math.max(...numbers)
console.log(arrayMax);

//use spread operator to copy
const friends = [1,2,3,4,5];
const bondhu = friends;  // refernce dhore rakhe
const dosto = [...friends]; //copy
console.log(dosto);
friends.push(20);
console.log(dosto);
console.log(friends);

//advanced
const sonkha = [...friends, 99999];;
console.log(sonkha); //copy with add extra elements