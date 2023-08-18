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
}