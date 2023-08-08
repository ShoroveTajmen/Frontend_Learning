/*
1. if ticket numbers is less than 100, per ticket price: 100
2. if ticket numbers is more than 100, but less than 200 then first tickets will be 100/tickket rest tickets will be 90 taka per piece
3. if you purchase more than 200 tickets
first 100 --> 100tk
101-200 ---> 90 tk
200+ ---> 70tk
*/

function ticketPrice(ticketQuantity){
    const first100Rate = 100;
    const second100Rate = 90;
    const restTickeetRate = 70;

    if(ticketQuantity <= 100){
        const ticketPrice = ticketQuantity * first100Rate;
        return ticketPrice;
    }else if(ticketQuantity <= 200){
        const first100Price = 100 * first100Rate;
        const restTicketQuantity = ticketQuantity - 100;
        const restTicketPrice = restTicketQuantity * 90;
        const totalPrice = first100Price + restTicketPrice;
        return totalPrice;
    }else{
        const first100Price = 100 * first100Rate;
        const second100Price = 100 * second100Rate;
        const restTicketQuantity = ticketQuantity - 200;
        const restTicketPrice = restTicketQuantity * restTickeetRate;
        const totalPrice = first100Price + second100Price + restTicketPrice;
        return totalPrice;
    }
}
const price = ticketPrice(220);
console.log(price);