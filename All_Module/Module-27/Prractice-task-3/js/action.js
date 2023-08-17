/*
1. get the textarea field
2. get the boldButton and set event  listener
3. get the italic button and set the event listener
*/

//1.
const myTextArea = document.getElementById('myTextarea');
//2.
const boldButton = document.getElementById('boldButton').addEventListener('click', function(){
    if(myTextArea.style.fontWeight === 'bold'){
        myTextArea.style.fontWeight = 'normal';
    }else{
        myTextArea.style.fontWeight = 'bold';
    }
})
//3.
