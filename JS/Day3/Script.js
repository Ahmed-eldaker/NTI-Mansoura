let num1 = prompt("enter Value 1");
let num2 = prompt("enter Value 2");
let num3 = prompt("enter Value 3");
let num4 = prompt("enter Value 4");
let num5 = prompt("enter Value 5");

let arr = [];
arr.push(num1, num2, num3, num4, num5);
//Ascending Order
let ascending = arr.toSorted();
//Descending Order
let descending = arr.toSorted().reverse();

alert(`Sorted in ascending order: ${ascending.join(", ")}`);
alert(`Sorted in descending order: ${descending.join(", ")}`);
