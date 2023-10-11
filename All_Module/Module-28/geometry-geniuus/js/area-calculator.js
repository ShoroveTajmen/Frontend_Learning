//Traingle---------------------
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
    addToCalculationEntry('Traigle', area);
}


//Rectangle------------------
function calculateRectangleArea(){
    //get rectangle width
    const widthField = document.getElementById('rectangle-width');
    const widthvalueString = widthField.value;
    const width = parseFloat(widthvalueString);
    
    //get rectangle length value
    const lengthField = document.getElementById('rectangle-length');
    const lengthValueString = lengthField.value;
    const length = parseFloat(lengthValueString);


    //vvalidate input
    if(isNaN(width) || isNaN(length)){
        alert('please insert a number');
        return;
    }
    const area = width * length;
    
    //show rectangle area
    const areaSpan = document.getElementById('rectangle-area');
    areaSpan.innerText = area;

    addToCalculationEntry('Rectangle', area);
    
}


//Parallelogrm------------------------
//reusable function ---> reduce duplicate code
function calculateParallelogramArea(){
   const base = getInputValue('Parallelogram-base');
   const height = getInputValue('Parallelogram-height');

   //validate
   if(isNaN(base) || isNaN(height)){
    alert('please insert a number');
    return;
   }
   const area = base * height;
   setElementInnerText('Parallelogram-area', area);

   //add to clcuultion entry
   addToCalculationEntry('Parallelogrm', area)
   
}

//Ellipse
function calculateEllipseArea(){
    const major = getInputValue('ellipse-first-radius');
    const minnor = getInputValue('ellipse-second-radius');

    const area = 3.14 * major * minnor ;
    const areaDecimal = area.toFixed(2);
    console.log(areaDecimal);
    setElementInnerText('ellipse-area', areaDecimal);

    addToCalculationEntry('Ellipse', areaDecimal)
}


//reusable get input value field in numberr
function getInputValue(fieldId){
    const inputField = document.getElementById(fieldId);
    const inputFieldString = inputField.value;
    const value = parseFloat(inputFieldString);
    return value;
}

//add to calculation entry
/*
1. get the element where you want to add the dynamic HTML
2. create a element you want to add
3. if needed add some class
4. set inner HTML. it could be dynmic template string
5.append the created element as a child of the parent
*/
function addToCalculationEntry(areaType, area){
    console.log(areaType + ' ' + area);
    const calculationEntry = document.getElementById('calculation-entry');

    const count = calculationEntry.childElementCount;

    const p = document.createElement('p');
    p.classList.add('my-4')
    p.innerHTML = `${count + 1}. ${areaType} ${area} cm<sup>2</sup> <button class="btn btn-sm btn-success">Convert</button>`;

    calculationEntry.appendChild(p);
}


//reusable set span, p , div, etc text
function setElementInnerText(elementId, area){
    const element = document.getElementById(elementId);
    element.innerText = area;
}

//Data Validation
/*
1. set the proper type of the input field. (number,data, email )
2. check type using typeof
3.NaN means: Not a Number. isNaN is checkking wheather the input is a number or not
*/