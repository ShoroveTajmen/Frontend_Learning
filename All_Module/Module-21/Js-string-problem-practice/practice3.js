function numberAverage(arr){
    let sum = 0;
    let avg;
    for(let i = 0; i < arr.length; i++){
       sum = sum + arr[i];
       avg = sum / 5;
    }
    return avg;
}

const arr = [1, 2, 3, 4, 5];
const averageResult = numberAverage(arr);
console.log(averageResult);