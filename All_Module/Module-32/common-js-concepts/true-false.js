/*
Truthy:
1. true
2. any number (+ve, -ve) will be truthy other than 0
3. any stringg truthy except empty string
4. '0' , 'false'
5. empty object {}
6. [] empty array

Falsy::
1. false
2. 0
3. '' (emppty string)
4. undefined
5. null
*/

// let x = [];
// if(x){
//     console.log('value x is truthy');
// }else{
//     console.log('vaalue x is faaalsy')
// }

//optional
//checkk falsy
const y = null;
//normally y is false if !y then it's converted to true value and if block e dhuke jabe
if(y){
    console.log('value is falsy');
}

///check true
const z = {class: 9};
//first !z convert to falsy value and then !!z convert to truthy value and if block will be executed
if(!!z){
    console.log(z);
}