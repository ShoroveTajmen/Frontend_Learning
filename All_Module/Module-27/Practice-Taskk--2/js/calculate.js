/*
1. select the apply button
*/

//step-1:
document.getElementById('btn-apply').addEventListener('click', function(){
    const inputFiieldElement = document.getElementById('input-field');
    const inputFiieldValue = inputFiieldElement.value;
    inputFiieldElement.value = '';
    const withOutDiscountPrice = 1000;
    const discountPriice = (1000 - (1000 * (30 / 100)));
    if(inputFiieldValue === "DISC30"){
        const haveToPayElement = document.getElementById('amount');
        haveToPayElement.innerText = discountPriice;  
    }else{
        alert("Wrongg Coupon");
        const haveToPayElement = document.getElementById('amount');
        haveToPayElement.innerText = withOutDiscountPrice;
    }
})