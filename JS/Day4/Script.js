// function checkTwoParams() {
//   console.log(arguments);

//   if (arguments.length == 2) {
//     console.log("two params");
//   } else {
//     throw new Error("Custom error message");
//   }
// }

// checkTwoParams(4, 2, 2);
// ----------------------------
// function addSum(a, b) {
//   //   console.log(arguments);
//   console.log(typeof arguments[0]);
//   var sum = 0;
//   for (i = 0; i < arguments.length; i++) {
//     if (typeof arguments[i] == "number") {
//       sum += arguments[i];
//     } else {
//       console.log(sum);

//       throw new Error("nan");
//     }
//   }

//   return sum;
// }
// var result = addSum(5, 6, "5", 4);
// console.log(result);
// -------------------------------
// var arr = [1, 2, 3, 4, 5];
// console.log(arr);
// console.log(arr.reverse());
// var arr = [];
// function reverseFunc() {
//   var argArr = Array.from(arguments);
//   console.log(argArr);
//   console.log(argArr.reverse());
// }
// reverseFunc(1, 2, 3, 4, 5);
