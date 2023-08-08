function isLeapYear (year){
    const remainder = year % 4;
    if(remainder === 0){
        return true;
    }return false;
}
var result = isLeapYear(1933);
console.log(result);
var result2 = isLeapYear(1960);
console.log(result2);
