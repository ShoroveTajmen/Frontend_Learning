const numbers = [1,2,3,4,5];
// for(let i = 0; i < numbers.length; i++){};
//while


//for of loop using for array or string
for(const num of numbers){
    // console.log(num);
}

const nobab = 'shorove tajmen';
for(const char of nobab){
    // console.log(char);
}


//for in loop using for object
const glass = {
    name : 'glass',
    color : 'golden',
    price : 12,
    isCleaned : true,
}
for(const key in glass){
    const value = glass[key];
    // console.log(key, value);
}

//optional
const keys = Object.keys(glass);
console.log(keys);
for (const key of keys){
    const value = glass[key]
    console.log(key, value);
}