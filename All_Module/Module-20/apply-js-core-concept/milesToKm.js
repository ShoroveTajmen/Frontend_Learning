function milesToKilometer(miles){
    const kilometer = miles * 1.609;
    return kilometer;
}
const miles = 30;
var result = milesToKilometer(miles);
console.log(result.toFixed(2));