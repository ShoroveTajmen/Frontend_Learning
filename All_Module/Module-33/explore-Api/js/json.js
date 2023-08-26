const user = {id: 1, name: 'Gorib Aamir', job: 'actor'};
//javaScript object notation {JSON}

const stringified = JSON.stringify(user);
// console.log(user);
// console.log(stringified);


const shop = {
    owner: 'alia',
    address: {
        stret: 'kochukhet voot er goli',
        city: 'ranbir',
        country: 'BD'
    },
    products : ['laptop', 'mic', 'monitor', 'keyboard'],
    revenue: 45000,
    isOpen: true,
    isNew: false
};
console.log(shop);
const shopJSON = JSON.stringify(shop);
console.log(shopJSON);
//if we want to again back to the main object from json string then
const jsonObj = JSON.parse(shopJSON);
console.log(jsonObj);

/*
{ id: 1, name: 'Gorib Aamir', job: 'actor' }
{"id":1,"name":"Gorib Aamir","job":"actor"} */