//default --> if value is not provided, takkke this as a default

function add(num1 = 0, num2 = 0){
    const result = num1 + num2;
    console.log(num1, num2, result);
    return result;
}
// const sum = add(5,7);
// const sum = add();
const sum = add(7);

//deafult value set for string
function fullName(first, last = ''){
    const full = first + ' ' + last;
    return full;
}

//deafult value set for array
function friends(numbs = []){

}

//deafult value set for object
function person(human = {}){
    
}
