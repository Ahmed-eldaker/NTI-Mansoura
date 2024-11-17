var users = () => {
  return new Promise((resolve) => {
    var myHttp = new XMLHttpRequest();
    myHttp.open("Get", "https://jsonplaceholder.typicode.com/users");
    myHttp.send();
    myHttp.addEventListener("readystatechange", () => {
      if (myHttp.readyState == 4) {
        var users = JSON.parse(myHttp.response);
        console.log(users[0]);
      }
    });
    resolve();
  });
};
var albums = () => {
  return new Promise((resolve) => {
    var myHttp = new XMLHttpRequest();
    myHttp.open("Get", "https://jsonplaceholder.typicode.com/albums");
    myHttp.send();
    myHttp.addEventListener("readystatechange", () => {
      if (myHttp.readyState == 4) {
        var albums = JSON.parse(myHttp.response);
        console.log(albums[0]);
      }
    });
    resolve();
  });
};
var posts = () => {
  return new Promise(() => {
    var myHttp = new XMLHttpRequest();
    myHttp.open("Get", "https://jsonplaceholder.typicode.com/posts");
    myHttp.send();
    myHttp.addEventListener("readystatechange", () => {
      if (myHttp.readyState == 4) {
        var posts = JSON.parse(myHttp.response);
        console.log(posts[0]);
      }
    });
  });
};
// console.log(users());
// users().then(albums());

// albums();
// posts();
// setTimeout(() => {
//   console.log("hello after 2 sec");
// }, 1000);
// setTimeout(() => {
//   console.log("setTimeOut");
// }, 1000);
function test() {
  console.log("test");
}
console.log("before");
// var count = 0;
// var interval = setInterval(() => {
//   count++;
//   console.log("hello every 2 sec", count);
//   if (count == 5) {
//     clearInterval(interval);
//   }
// });
console.log("after");
// test();
// function one() {
//   return new Promise(() => {
//     console.log("one");
//   });
// }
// function one() {
//   return new Promise(() => {
//     console.log("one");
//   });
// }
// var btn = document.getElementById("btn");
// btn.addEventListener("click", () => {
//   console.log("clicked");
// // });
// function clicked() {
//   console.log("clicked");
// }

// function one() {
//   console.log("data");

//   return new Promise(() => console.log("one"));
// }
// function two() {
//   return new Promise(() => console.log("two"));
// }
// function three() {
//   return new Promise(() => console.log("three"));
// }
// function four() {
//   return new Promise(() => console.log("four"));
// }
// // one(function () {
// //   return two(function () {
// //     return three(function () {
// //       return four();
// //     });
// //   });
// // });
// one().then(two()).then(three()).then(four());

async function posts() {
  var response = await fetch("https://jsonplaceholder.typicode.com/posts");

  //   console.log(data);
  var data = await response.json();

  console.log(data);
}
async function albums() {
  var response = await fetch("https://jsonplaceholder.typicode.com/posts");

  //   console.log(data);
  var data = await response.json();

  console.log(data);
}
async function posts() {
  var response = await fetch("https://jsonplaceholder.typicode.com/posts");

  //   console.log(data);
  var data = await response.json();

  console.log(data);
}
// setTimeout(() => {
//   console.log("setTimeOut 1");
// }, 1000);
// console.log("no time");

// setTimeout(() => {
//   console.log("setTimeOut 2");
// }, 3000);
// setTimeout(() => {
//   console.log("setTimeOut 3");
// }, 0.00001);
// console.log("no time");
function Person(name, age) {
  this.name = name;
  this.age = age;
  // this.info = function () {
  //   console.log("name : ", this.name, "age : ", this.age);
  // };
}
Person.prototype.info = function () {
  console.log("name : ", this.name, "age : ", this.age);
};
// Person();
var ahmed = new Person("ahmed", 25);
var mazen = new Person("Mazen", 22);
ahmed.info();
console.log(ahmed);

// Person();
var str1 = "hello";
console.log(str1);

var str = new String("hello");
console.log(str);
