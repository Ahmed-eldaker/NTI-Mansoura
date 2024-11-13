// var x = 5;

// // console.log(insideFunc);
// var func = function () {
//   var insideFunc = 12;
//   console.log(x);
// };
// func();

// console.log(x);
// for (var index = 0; index < 5; index++) {
//   console.log(index);
// }
// console.log("inside :", index);
// ---------------
// function b() {
//   var myvar = 1;
//   console.log(myvar);
// }
// console.log(x);
// a();
// b();
// function a() {
//   var myvar = 2;
//   console.log(myvar);
// }
// var x = 5;
// -----------------
// function f1(x, y) {
//   if (x > 3) {
//     var z = 3;
//   } else {
//     var zz = 3;
//   }
//   console.log(z, zz);
//   zzz = 300;
// }
// f1(4, 3);
// alert(zzz);
// -----------------
// function b() {
//   //   myvar;
//   var myvar;
//   console.log(myvar);
// }
// function a() {
//   var myvar = 2;
//   console.log(myvar);
//   b();
// }
// var myvar = 1;
// console.log(myvar);
// a();
// console.log(myvar);
// *--------------
// function b() {
//   //   var myvar;
//   console.log(myvar);
// }
// function a() {
//   var myvar = 2;
//   console.log(myvar);
//   b();
// }
// a();
// console.log(myvar);
// -------------------------
function a() {
  function b() {
    console.log(myvar);
  }
  var myvar = 2;
  console.log(myvar);
  b();
}
a();
console.log(myvar);
