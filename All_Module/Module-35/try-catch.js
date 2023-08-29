function checkAge(){
    const ageField = document.getElementById('age');
    const ageText = ageField.value;
    const errorTag = document.getElementById('error')
    try{
        const age = parseInt(ageText);

        if(isNaN(age)){
            throw "Please enter a number";
        }
        else if(age < 18){
            throw "bachha not allowed"
        }
        else if(age > 30){
            throw "agge beshi"
        }
        errorTag.innerHTML= '';
    }
    catch(err){
        console.log('Error:', err);
        errorTag.innerHTML = 'ERROR:' + err;
    }
    finally{
        console.log('All done insiide try catch');
    }
    console.log(11111111);
}