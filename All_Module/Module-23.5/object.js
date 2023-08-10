const nayok = {
    name : 'Shakib khan',
    id: 121,
    address: 'movie cinema',
    isSingle: true,
    friends: ['Apu', 'razz', 'salma', 'aamir'],
    movies: [{name:'no 1', year: 2015}, {name:'king khan', year: 2018}],
    act: function(){
        console.log('actingg like shakkib khan');
    },
    car: {
        brand: 'tesla',
        prrrice: 5000000,
        made: 2025,
        manufaccturrer: {
            name : 'tesla',
            ceo: 'elon mask',
            country:'USA',
        }
    }
}

// console.log(student.car);
console.log(nayok.act);
nayok.act();