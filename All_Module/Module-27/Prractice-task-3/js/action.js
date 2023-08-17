/*
1. get the textarea field
2. get the boldButton and set event  listener
3. get the italic button and set the event listener
4. get the underline button and set the event listener
*/

//1.
const myTextArea = document.getElementById('myTextarea');
//2. BoldBuutton
const boldButton = document.getElementById('boldButton').addEventListener('click', function(){
    if(myTextArea.style.fontWeight === 'bold'){
        myTextArea.style.fontWeight = 'normal';
    }else{
        myTextArea.style.fontWeight = 'bold';
    }
})
//3.ItalicButton
const italicButton = document.getElementById('italicButton').addEventListener('click', function(){
    if(myTextArea.style.fontStyle === 'italic'){
        myTextArea.style.fontStyle = 'normal';
    }else{
        myTextArea.style.fontStyle = 'italic';
    }
})
//4.underLineBuuttttton
const underlineButton = document.getElementById('underlineButton').addEventListener('click',function(){
    if(myTextArea.style.textDecoration === 'underline'){
        myTextArea.style.textDecoration = 'none';
    }else{
        myTextArea.style.textDecoration = 'underline';
    }
})
