class Vehicle{
    constructor(name, price){
        this.name = name;
        this.price = price;
    }
    move(){
        console.log('gari chole na chole na cholena re')
    }
}
class Bus extends Vehicle{
    constructor(name, price, seat, ticketPrice){
        super(name, price);
        this.seat = seat;
        this.ticketPrice = ticketPrice;
    }
}

class Truckk extends Vehicle{
    constructor(name, price, load){
        super(name, price);
        this.load = load;
    }
    
}