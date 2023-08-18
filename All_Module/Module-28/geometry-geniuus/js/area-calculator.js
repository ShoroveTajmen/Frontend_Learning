function calculateTriangleArea(){
    //get traingle base value
    const baseFiled = document.getElementById('traingle-base');
    const baseValueString = baseFiled.value;
    const base = parseFloat(baseValueString);
    console.log(base);

    //get triangle height value
    const heightField = document.getElementById('traingle-height');
    const heightValueString = heightField.value;
    const height = parseFloat(heightValueString);
    console.log(height);

    const area = 0.5 * base * height;
    
    //show traingle area
    const areaSpan = document.getElementById('traingle-area');
    areaSpan.innerText = area;
}

function calculateRectangleArea(){
    //get rectangle width
    const widthField = document.getElementById('rectangle-width');
    const widthvalueString = widthField.value;
    const width = parseFloat(widthvalueString);
    
    //get rectangle length value
    const lengthField = document.getElementById('rectangle-length');
    const lengthValueString = lengthField.value;
    const length = parseFloat(lengthValueString);

    const area = width * length;
    
    //show rectangle area
    const areaSpan = document.getElementById('rectangle-area');
    areaSpan.innerText = area;
    
}

//reusable function ---> reduce duplicate code

function calculateParallelogramArea(){
   const base = getInputValue('Parallelogram-base');
   const height = getInputValue('Parallelogram-height');
   console.log(height);
}

//reusable get input value field in numberr
function getInputValue(fieldId){
    const inputField = document.getElementById(fieldId);
    const inputFieldString = inputField.value;
    const value = parseFloat(inputFieldString);
    return value;
}