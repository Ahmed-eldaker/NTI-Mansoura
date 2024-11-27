// import sum, { PI } from "./Math.js";
// console.log(PI);
// let res = sum(2, 5);
// console.log(res);
// sum(2, 4);
// console.log(count);

// function privateCounter() {
//   let count = 0;
//   let y = 5;
//   //   console.log("privateCount");

//   return function () {
//     count++;
//     return count;
//   };
// }
// let counter = privateCounter();
// console.log(counter());
// console.log(counter());
// console.log(counter());
// console.log(counter());
// function x() {
//   return 5;
// }
// x();
// let counter = () => {
//   let count = 0;
//   function inside() {
//     count++;
//     console.log(count);
//   }
//   inside();
//   return {
//     increment: function () {
//       count++;
//     },
//     getCount: function () {
//       console.log(count, "from log");
//       return count, "from return";
//     },
//   };
// };
// let obj = counter();
// obj.increment();
// var y = obj.getCount();
// console.log(y);
// counter();
// counter();
const productName = document.getElementById("productName");
const productPrice = document.getElementById("productPrice");
const add = document.getElementById("add");
const search = document.getElementById("search");
const productRow = document.getElementById("productRow");
const error = document.getElementById("error");
const allProducts = [];
let myIndex;
add.addEventListener("click", () => {
  if (productName.value && productPrice.value) {
    if (add.innerText == "ADD") {
      const product = {
        name: productName.value,
        price: productPrice.value,
      };
      allProducts.push(product);
      error.style.visibility = "hidden";
      displayProduct();
      clearData();
    } else {
      allProducts[myIndex].name = productName.value;
      allProducts[myIndex].price = productPrice.value;
      displayProduct();
      clearData();
      add.innerText = "ADD";
    }
  } else {
    error.style.visibility = "visible";
  }
});
let searchProduct = () => {
  let term = search.value;
  productRow.innerHTML = "";
  for (let i = 0; i < allProducts.length; i++) {
    if (allProducts[i].name.includes(term)) {
      productRow.innerHTML += `
        <tr>
          <td>${i + 1}</td>
          <td>${allProducts[i].name}</td>
          <td>${allProducts[i].price}</td>
          <td>
            <button onClick={updateProduct(${i})} class="btn btn-outline-warning">Update</button>
          </td>
          <td>
            <button onClick={deleteProduct(${i})} class="btn btn-outline-danger">Delete</button>
          </td>
        </tr>`;
    }
  }
};
search.addEventListener("keyup", searchProduct);

let displayProduct = () => {
  productRow.innerHTML = "";
  for (let i = 0; i < allProducts.length; i++) {
    productRow.innerHTML += `
   <tr>
     <td>${i + 1}</td>
     <td>${allProducts[i].name}</td>
     <td>${allProducts[i].price}</td>
     <td>
       <button onClick={updateProduct(${i})} class="btn btn-outline-warning">Update</button>
     </td>
     <td>
       <button onClick={deleteProduct(${i})} class="btn btn-outline-danger">Delete</button>
     </td>
   </tr>`;
  }
  //   productRow.innerHTML = cartona;
};

// validationName = () => {
//     regx
// };
let clearData = () => {
  productName.value = "";
  productPrice.value = "";
};
let deleteProduct = (i) => {
  allProducts.splice(i, 1);
  displayProduct();
  clearData();
};
let updateProduct = (i) => {
  productName.value = allProducts[i].name;
  productPrice.value = allProducts[i].price;
  add.innerText = "Update";
  myIndex = i;
};
