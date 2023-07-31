var numbers = [21, 34, 55, 87, 89, 188, 25, 98];
for(var i = 0; i <= numbers.length; i++){
    var number = numbers[i];
    if(number > 50){
        continue;
    }
    console.log(number);
}