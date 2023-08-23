const glass = {
    name : 'glass',
    color : 'golden',
    price : 12,
    isCleaned : true,
}

//all property name
const keys = Object.keys(glass);
console.log(keys);
//[ 'name', 'color', 'price', 'isCleaned' ]


//all properties value
const values = Object.values(glass);
console.log(values);
//[ 'glass', 'golden', 12, true ]

const entries = Object.entries(glass);
console.log(entries);
//array of array  or two dimensional array
// [
//     [ 'name', 'glass' ],
//     [ 'color', 'golden' ],
//     [ 'price', 12 ],
//     [ 'isCleaned', true ]
// ]


//delete object property
// delete glass.isCleaned;

const {isCleaned, ...newObject} = glass;
console.log(newObject);



//freeze --> new property add kra jbena value update, delete kichui kra jbena
Object.freeze(glass);
glass.source = 'bd';
console.log(glass);


//seal --> existing property modify kra jabe but new kore add ba delete kkra jbe na
Object.seal(glass);
glass.price = 100;
console.log(glass);