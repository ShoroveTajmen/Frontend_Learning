const numbers = [4,5,7,1,2,66];
const sum = numbers.reduce((previous, current) => previous + current, 0)
console.log(sum);

const sum2 = numbers.reduce((p,c) => p+c , 0)
console.log(sum2);