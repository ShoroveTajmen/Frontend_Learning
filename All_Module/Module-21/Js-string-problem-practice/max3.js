const jim = 84;
const dela = 99;
const chinku = 770;

// if(jim > dela && jim > chinku){
//     console.log('jim will get the cake');
// }else if(dela > jim && dela > chinku){
//     console.log('dela will get the cakke');
// }else{
//     console.log('chinku will get the cake');
// }

//2nd way
// function maxNum(jim, dela, chinku) {
//   console.log(Math.max(jim, dela, chinku));
// }
// maxNum(jim, dela, chinku);

//3rd way using function to find max number
// function maxNumber(jim, dela, chinku) {
//   if (jim > dela && jim > chinku) {
//     console.log("jim will get the cake");
//   } else if (dela > jim && dela > chinku) {
//     console.log("dela will get the cakke");
//   } else {
//     console.log("chinku will get the cake");
//   }
// }
// maxNumber(jim, dela, chinku);

///////////////////////////////////////////////////////////
//using function to get min number
// function minNumber(jim, dela, chinku) {
//   if (jim < dela && jim < chinku) {
//     console.log("jim will not get the cake");
//   } else if (dela < jim && dela < chinku) {
//     console.log("dela will not get the cakke");
//   } else {
//     console.log("chinku will not get the cake");
//   }
// }
// minNumber(jim, dela, chinku);

//2nd way
function minNum(jim, dela, chinku) {
  console.log(Math.min(jim, dela, chinku));
}
minNum(jim, dela, chinku);
