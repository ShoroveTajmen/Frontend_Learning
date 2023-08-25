//always use ===
//equal comparision doesn't work for non-primitive
//it's called type coercion


const first = 2;
const second = '';
if(first == second){
    console.log('values are equal');
}else{
    console.log('values are not equal');
}