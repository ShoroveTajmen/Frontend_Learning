function bringSingara(money){
    var singaraPrice = 10;
    var quantity = money / singaraPrice;
    return quantity;
}
var mytaka = 100;
var singaras = bringSingara(mytaka);
console.log('total singara : ' +singaras);