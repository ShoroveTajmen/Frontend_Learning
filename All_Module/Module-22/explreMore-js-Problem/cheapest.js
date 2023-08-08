const phones = [
    {name: 'smsung', cmera: 22, storage: '32gb', price: 36000, color: 'silver'},
    {name: 'oppo', cmera: 22, storage: '32gb', price: 22000, color: 'silver'},
    {name: 'mi', cmera: 22, storage: '32gb', price: 82000, color: 'silver'},
    {name: 'noki', cmera: 22, storage: '32gb', price: 52000, color: 'silver'},
    {name: 'wlton', cmera: 22, storage: '32gb', price: 20000, color: 'silver'},
    {name: 'HTC', cmera: 22, storage: '32gb', price: 66600, color: 'silver'},
]

function chepestPhone(phones){
    let cheapest = phones[0];
    for(let i = 0; i < phones.length; i++){
        const phone = phones[i];
        if(phone.price < cheapest.price){
            cheapest = phone;
        }
    }
    return cheapest;
}

const phone = chepestPhone(phones);
console.log(phone);