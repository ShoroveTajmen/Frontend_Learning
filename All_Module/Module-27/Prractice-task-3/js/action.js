/*
1. get the textarea field
2. get the boldButton and set event  listener
3. get the italic button and set the event listener
4. get the underline button and set the event listener
5. get the left button and set the text in left side using event liistener
6.get the center button and set the text in center using event liistener
7.get the right button and set the text in right using event liistener
8.get the justify button and set the text  using event liistener
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
//5. text in left side
const leftButton = document.getElementById('leftButton').addEventListener('click', function(){
    myTextArea.style.textAlign = 'left';
})
//6. text in center
const centerButton = document.getElementById('centerButton').addEventListener('click', function(){
    myTextArea.style.textAlign = 'center';
})
//7. text in right
const rightButton = document.getElementById('rightButton').addEventListener('click', function(){
    myTextArea.style.textAlign = 'right';
})
//8. justifyButton
const justifyButton = document.getElementById('justifyButton').addEventListener('click', function(){
    myTextArea.style.textAlign = 'justify';
})