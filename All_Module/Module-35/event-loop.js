function a(){
    console.log('a');
    b()
    console.log('aa');
}

function b(){
    console.log('b');
    d()
    console.log('bb');
}

function d(){
    console.log('d')
    console.log('d');
}


setTimeout(() => {
    console.log('inside timeout')
}, 2000)

fetch('https://jsonplaceholder.typicode.com/todos')
.then(res => res.json())
.then(data => console.log(data))
a();