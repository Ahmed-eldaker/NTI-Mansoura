// function checkTwoParams() {
//   //   console.log(arguments);
//   if (arguments.length == 2) {
//     console.log("two params");
//   } else {
//     throw new Error("Custom error message");
//   }
// }

// checkTwoParams(4, 2, 2);
// console.slog("stop");
// ----------------------------
// function addSum(a, b) {
//   //   console.log(arguments);
//   console.log(typeof arguments[0]);
//   try {
//     var sum = 0;
//     for (i = 0; i < arguments.length; i++) {
//       if (typeof arguments[i] == "number") {
//         sum += arguments[i];
//       } else {
//         console.log(sum);

//         throw new Error("nan");
//       }
//     }
//   } catch (error) {
//     console.log(error);
//     return sum;
//   }
// }
// var result = addSum(5, 6, "5", 4);
// console.log(result);
// -------------------------------
// var arr = [];
// function reverseFunc() {
//   var argArr = Array.from(arguments);
//   console.log(argArr);
//   console.log(argArr.reverse());
// }
// reverseFunc(1, 2, 3, 4, 5);
// --------------------------
// Select the navbar and menu options
// console.log(navigator.onLine); // true or false

// // Check if the browser has geolocation capability
// if ("geolocation" in navigator) {
//   navigator.geolocation.getCurrentPosition((position) => {
//     console.log("Latitude:", position.coords.latitude);
//     console.log("Longitude:", position.coords.longitude);
//   });
// }
// console.log(window.document.body);
// console.log(document.body);
// console.log(document.getElementById("item"));
// console.log(document.getElementsByClassName("container"));
// console.log(document.getElementsByTagName("p"));
// console.log(document.querySelector(".container"));
// console.log(document.querySelectorAll("#item"));
// var image = document.getElementsByTagName("img")[0];
// // image.setAttribute("src", "IMGS/pexels-pixabay-355952.jpg");
// // console.log(image.getAttribute("src"));
// image.removeAttribute;
// console.log(
//   (image.src = "IMGS/vertical-shot-people-riding-camels-sand-dune-desert.jpg")
// );
// // image.src = "";
// console.log(image.src);

// console.log(image.getAttribute("alt"));
// console.log(image.hasAttribute("alt"));

// var h1 = document.getElementsByTagName("h1")[0];
// h1.classList.add("change");
// console.log(h1.classList.contains("change"));
// h1.classList.remove("change");

// console.log(h1[0]);

// h1.classList.add("change");
// console.log(h1.classList.contains("change"));

// console.log(div.innerText);
// console.log(div.innerHTML);
// console.log(div.textContent);
// var divTest = document.createElement("div");
// divTest.innerText = "hello from js ";
// div.appendChild(divTest);
// console.log(document.body);

// console.log(divTest);
// var div = document.getElementsByTagName("div")[0];

// div.addEventListener("mouseover", () => {
//   div.style.backgroundColor = "aqua";
// });
// div.addEventListener("mouseout", () => {
//   div.style.backgroundColor = "brown";
// });
// div.addEventListener("mousemove", (event) => {
//   console.log(event.altKey);
//   //   console.log(event.offsY);
// });
// div.addEventListener("click", (event) => {
//   console.log("clicked");
//   //   console.log(event.offsY);
// });
// div.addEventListener("dblclick", (event) => {
//   console.log("DBclicked");
//   //   console.log(event.offsY);
// });
// div.addEventListener("", (event) => {
//   console.log("DBclicked");
//   //   console.log(event.offsY);
// });
// var input = document.getElementsByTagName("input")[0];
// input.addEventListener("focus", () => {
//   input.style.border = "1px solid red";
// });
// input.addEventListener("blur", () => {
//   input.style.border = "1px solid blue";
// });
// input.addEventListener("keypress", () => {
//   console.log("keypress");
// });

// console.log(input);
// var input = document.getElementById("name");
// var myForm = document.getElementById("myForm");
// myForm.addEventListener("submit", (e) => {
//   e.preventDefault();
//   if (input.value == "") {
//     alert("invalid data ");
//   }
//   console.log(input.value);
// });
// console.log(myForm);
// var fruitSelect = document.getElementById("fruitSelect");
// var selectedFruit = document.getElementById("selectedFruit");

// fruitSelect.addEventListener("change", (e) => {
//   selectedFruit.innerText = e.target.value;
// });
// var navbar = document.getElementById("navbar");
// var navOptions = document.getElementById("navOptions");
// navbar.addEventListener("mouseover", () => {
//   navOptions.classList.remove("hidden");
// });
// navbar.addEventListener("mouseout", () => {
//   navOptions.classList.add("hidden");
// });

var imageView = document.getElementById("imageView");
var img1 = document.getElementsByTagName("img")[0];
console.log(img1.getAttribute("src"));

var img2 = document.getElementsByTagName("img")[1];
var img3 = document.getElementsByTagName("img")[2];
img1.addEventListener("click", (e) => {
  imageView.src = img1.getAttribute("src");
});
img2.addEventListener("click", (e) => {
  imageView.src = img2.getAttribute("src");
});
img3.addEventListener("click", (e) => {
  imageView.src = img3.getAttribute("src");
});
