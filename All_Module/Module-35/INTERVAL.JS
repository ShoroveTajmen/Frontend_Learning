// const func = setTimeout(function(){
//     const num = 0;
//     console.log(num + 1);
// }, 1000);

// clearTimeout(func);


const func = setInterval(function(){
    const num = 0;
    console.log(num + 1);
    if(num > 5){
        clearInterval(func);
    }
}, 1000);


