let intervalId;

const start = (data) =>{
    const number = document.getElementById('number');
    const numberStringValue = number.innerText;
    let numberValue = parseInt(numberStringValue);
    // console.log(numberValue);

    intervalId = setInterval(()=>{
        number.innerText = numberValue++;
    }, 1000)
}

//stop
const stop = () => {
  clearInterval(intervalId);
}

//reset
const reset = () => {
    const number = document.getElementById('number'); 
    number.innerText = '0';
    clearInterval(intervalId);
}
