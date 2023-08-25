function greeting(greetingHandler, name){
    greetingHandler(name);

}
function greetingHandler(name){
    console.log('good morning', name);
}

greeting(greetingHandler, 'shorove');

console.log(!isTrue ? "hello" : "world")