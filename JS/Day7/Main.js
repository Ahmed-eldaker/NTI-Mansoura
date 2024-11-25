async function fetchData() {
  var response = await fetch("https://jsonplaceholder.typicode.com/users");
  var data = await response.json();

  //   console.log(data);
  data.forEach((ele) => {
    var usersName = document.createElement("p");
    usersName.innerText = ele.name;
    document.body.append(usersName);
  });

  //   for (var i = 0; i < data.length; i++) {}
}
fetchData();
// [1, 2, 3].forEach((ele) => console.log(ele));

// var newArr = arr.map((ele) => ele * 2);
// console.log(newArr);
// console.log(arr);
// var sum = arr.reduce((acc, cur) => acc + cur, 0);
// console.log(sum);
// var arr
//
// var obj = {
//   name: "John",
//   age: 30,
//   city: "New York",
// };

// let { name } = obj;
// console.log(name);

// // console.log(obj["name"]);

// for (var index in obj) {
//   //   console.log(index);
//   //   obj["name"];
//   //   console.log(obj[index]);
// }
// var str = "john";
// for (var ele of str) {
//   console.log(ele);
// }
// var newArr = arr.filter((num) => num % 2 == 0);
// console.log(newArr);

// let
// const
// console.log(test);

// // const arr = [1, 4, 3];
// const [e1, e2, e3] = [1, 4, 3];
// console.log(e1);

// const newArray = [...arr];
// newArray.push(5);
// console.log(arr);
// console.log(newArray);

// for (let index = 0; index < arr.length; index++) {
//   //   const element = array[index];
//   console.log(index, "inside");
// }
// arr.push(4);
// console.log(arr);
// arr = 123;

// console.log(index, "outside");
// let test = 10;
// test = "str";
// // console.log(test,);
// const PI = 3.14;
// PI = "safv";
// console.log(PI);
// let name = "john";
// let newName = new String("jessica");
// console.log(name, newName);

// console.log(`Hello ${name} your are welcome`);
// const test = () => console.log("test1");
// test();

// test = () => console.log("test2");
// test();
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.info = function () {
    console.log(`hello ${name} , your age is ${age}`);
  };
}
function Gender(val, name, age) {
  Person.call(this, name, age);
  this.gender = val;
}
const person = new Gender("male", "john", "25");
console.log(person);

// let p1 = new Person("john", "26");
// let p2 = new Person("ahmed", "24");
// let p3 = new Person("laila", "22");
// p1.info(), p2.info(), p3.info();

class Animal {
  constructor(name) {
    this.name = name;
  }
  sayHello() {
    console.log("hello ", this.name);
  }
}

class Dog extends Animal {
  constructor(name, owner) {
    super(name);
    this.owner = owner;
  }
}

let dog1 = new Dog("r3d", "john");
// let dog2 = new Dog("r3d", "john");
// let dog3 = new Dog("r3d", "john");
// let dog1 = new Dog("r3d", "john");
// let dog1 = new Dog("r3d", "john");
let cat = new Animal("bsbs");
// console.log(dog1);

// console.log(dog1.name, dog1.owner);
// dog1.sayHello();
// cat.sayHello();
