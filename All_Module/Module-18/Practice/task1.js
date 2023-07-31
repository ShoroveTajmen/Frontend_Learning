//taskk-1
/////////////////////////////////
// var i = 0;
// while (i <= 39){
//     console.log(i + ' : ' + "Ajke amr mon valo nei");
//     i++;
// }

//task-02
//////////////////////////
// for(var i = 58; i <= 98; i++){
//     console.log(i);
// }

//taskk-03
///////////////////////////////////
// for(var i = 412; i <= 456; i += 2){
//     if(i % 2 === 0){
//console.log(i);
//}
// }

//taskk-04
//////////////////////////////
// for (var i = 581; i <= 623; i += 2) {
//   if (i % 2 !== 0) {
//     console.log(i);
//   }
// }


//task-06
///////////////////////////////////////
// var learned = ['html', 'htmk5', 'css', 'tailwind', 'js', 'variable', 'data types', 'operator', 'conditional statement', 'loop', 'array'];
 
// for(var i = 0; i < learned.length; i++){
//     console.log(learned[i]);
// }


//task-07
//////////////////////////////////
// var allMobile = ['apple', 'samsung', 'google', 'oneplus', 'xiaomi', 'huawei', 'oppo', 'vivo', 'sony', 'lg'];

// for(var i = 0; i < allMobile.length; i++){
//     console.log(allMobile[i]);
// }


//task-08
/////////////////////////////////////
// for(var i = 30; i <= 86; i++){
//     if(i > 44){
//         break;
//     }
//     console.log(i);
// }


//task-09
/////////////////////////////////////////
var bookPrrices = [100, 140, 50, 80, 250, 230, 200, 98, 150, 80];
for(var i = 0; i < bookPrrices.length; i++){
    var price = bookPrrices[i];
    if(price >= 200){
        continue;
    }
    console.log(price);
}
