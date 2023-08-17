/*
1. get the textarea field
2. get the boldButton and set event  listener
3. get the italic button and set the event listener
4. get the underline button and set the event listener
5. get the left button and set the text in left side using event liistener
6.get the center button and set the text in center using event liistener
7.get the right button and set the text in right using event liistener
8.get the justify button and set the text  using event liistener
9.get the fontt size input field and change the font size of the text
10. get the upperLower and change the text style
11. get the color and set the color in a text
*/

//1.
const myTextArea = document.getElementById("myTextarea");
//2. BoldBuutton ***
const boldButton = document
  .getElementById("boldButton")
  .addEventListener("click", function () {
    if (myTextArea.style.fontWeight === "bold") {
      myTextArea.style.fontWeight = "normal";
    } else {
      myTextArea.style.fontWeight = "bold";
    }
  });
//3.ItalicButton
const italicButton = document
  .getElementById("italicButton")
  .addEventListener("click", function () {
    if (myTextArea.style.fontStyle === "italic") {
      myTextArea.style.fontStyle = "normal";
    } else {
      myTextArea.style.fontStyle = "italic";
    }
  });
//4.underLineBuuttttton
const underlineButton = document
  .getElementById("underlineButton")
  .addEventListener("click", function () {
    if (myTextArea.style.textDecoration === "underline") {
      myTextArea.style.textDecoration = "none";
    } else {
      myTextArea.style.textDecoration = "underline";
    }
  });
//5. text in left side
const leftButton = document
  .getElementById("leftButton")
  .addEventListener("click", function () {
    myTextArea.style.textAlign = "left";
  });
//6. text in center
const centerButton = document
  .getElementById("centerButton")
  .addEventListener("click", function () {
    myTextArea.style.textAlign = "center";
  });
//7. text in right
const rightButton = document
  .getElementById("rightButton")
  .addEventListener("click", function () {
    myTextArea.style.textAlign = "right";
  });
//8. justifyButton
const justifyButton = document
  .getElementById("justifyButton")
  .addEventListener("click", function () {
    myTextArea.style.textAlign = "justify";
  });
//9. fontSizeInput ******
const fontSizeInput = document.getElementById("fontSizeInput");
fontSizeInput.addEventListener("change", function () {
  const fontSizeInputValue = `${fontSizeInput.value}px`;
  myTextArea.style.fontSize = fontSizeInputValue;
});
//10. upperLower
const upperLowerCase = document
  .getElementById("upperLowerCase")
  .addEventListener("click", function () {
    if (myTextArea.style.textTransform === "uppercase") {
      myTextArea.style.textTransform = "lowercase";
    } else {
      myTextArea.style.textTransform = "uppercase";
    }
  });
  //11.textColor
  const textColor = document.getElementById('textColor').addEventListener('change',function(e){
    const selectedColor = e.target.value;
    myTextArea.style.color = selectedColor;
  })
