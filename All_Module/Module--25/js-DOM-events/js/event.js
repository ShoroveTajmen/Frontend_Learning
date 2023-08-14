///option 1: directyle set on the html element
// <button onclick="console.log(665)">Another button</button>

// 2. add onclick function on the html element
//*********************** */
// <button onclick="makeRed()">Make Red</button>
function makeRed() {
  document.body.style.backgroundColor = "red";
}

//option 3
const makeBlueButton = document.getElementById("make-blue");
makeBlueButton.onclick = makkeBlue;

function makkeBlue() {
  document.body.style.backgroundColor = "blue";
}

//option 3 another
const purpleButton = document.getElementById("make-purple");
purpleButton.onclick = function makePurple() {
  document.body.style.backgroundColor = "purple";
};

//option 4
const pinkkButton = document.getElementById("make-pink");
pinkkButton.addEventListener("click", makePink);

function makePink() {
  document.body.style.backgroundColor = "pink";
}

//option-4:; another
const makeGreenButton = document.getElementById("make-green");
makeGreenButton.addEventListener("click", function makeGreen() {
  document.body.style.backgroundColor = "green";
});

//option-4: final
//************************* */
document
  .getElementById("make-goldenrod")
  .addEventListener("click", function () {
    document.body.style.backgroundColor = "goldenrod";
  });
