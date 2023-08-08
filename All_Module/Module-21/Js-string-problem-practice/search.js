//includes method
var lyrics = 'tmi bondho kala pakhi ami jani ki';
var search = 'Pakhi';
var doesExit = lyrics.toLowerCase().includes(search.toLowerCase());
console.log(doesExit);

var indexOf = lyrics.indexOf('tmi');
if(indexOf !== -1){
    console.log('text exit');
}else{
    console.log('text is not exit');
}

//startWith
var startwith = lyrics.startsWith('tmi');
console.log(startwith);

//endwith
var endwith = lyrics.endsWith('Ki');
console.log(endwith);