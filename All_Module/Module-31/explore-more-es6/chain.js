//data access
const data = [{id: 1, name: 'abul', address: 'kochu khet'}];
console.log(data[0].address);

const products = {
    count : 5000,
    data : [
        {id: 1, name: 'lenovo laptop', price : 6500},
        {id: 1, name: 'lenovo laptop', price : 116500},
    ]
}
// second product price
console.log(products.data[1].price); 


const user = {
    iid: 5001,
    name : 'shoriful raj',
    addresss : {
        street: {
            first: '54/1 uttor side',
            second: 'poribag er golii',
            third: 'no dorai'
        },
        city: 'Dhhaka'
    }
}

const user2 = {
    iid: 5001,
    name : 'shoriful raj',
    addresss : {
        city: 'chittagong',
        country: 'bd',
    }
}
console.log(user.addresss.street.second);
console.log(user2.addresss.street?.second);