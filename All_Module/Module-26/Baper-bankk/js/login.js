//Step-1: add click event handler with the submit button
document.getElementById('btn-submit').addEventListener('click', function(){
    //step-2: get the email address value from the email input field
    //always remember to use .value to get text from an input field

    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    
    //step-3: get password
    //3.a set id on the html element
    //3.b get the element
    //3.c get the value from the element

    const passField = document.getElementById('user-pass');
    const pass = passField.value;
    

    //DANGER: DO NOT VERIFY email and pass from client side
    //step-4: veriffy email and password
    if(email === 'srvi@gmail.com' && pass === 'secret'){
        window.location.href = 'bank.html';
    }else{
        alert('NOT ALLOWED');
    }

})