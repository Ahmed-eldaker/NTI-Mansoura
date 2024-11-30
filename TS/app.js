var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
console.log("hello from ts");
var test = 5;
console.log(test);
// test=12
// test=10
// test=""
// x="15"
// test="asd"
// class Person{} 
var str = "asd";
str = "10";
var bool;
// console.log(bool);
bool = true;
var arr = [1, 2, 3];
arr.push(5);
console.log(arr);
var x = 5;
x = [];
x = 1;
x = "";
x = true;
x = function () { };
var y = [];
// y=5
// y=""
// y=[]
function callFunc(value) {
    console.log("inside Func");
    return value;
}
var e = callFunc(5) + 5;
var f = callFunc("10") + 5;
// let c:number =callFunc()+5
console.log(e);
var Color;
(function (Color) {
    Color[Color["admin"] = 0] = "admin";
    Color[Color["user"] = 1] = "user";
})(Color || (Color = {}));
var d;
d = Color.admin;
var user = {
    name: "",
    age: 0,
    sayHello: function () {
        console.log();
    }
};
var Human = /** @class */ (function () {
    function Human() {
    }
    Human.prototype.before = function () {
        console.log("before");
    };
    return Human;
}());
var Person = /** @class */ (function (_super) {
    __extends(Person, _super);
    function Person() {
        var _this = _super.call(this) || this;
        Person.data++;
        return _this;
    }
    Person.prototype.sayHello = function () {
        throw new Error("Method not implemented.");
    };
    Person.prototype.greet = function () {
        console.log("inside");
        //   console.log(`Hello, my name is ${this.name}`,"my age is " ,this.age);
    };
    Person.data = 0;
    return Person;
}(Human));
var user1 = new Person();
var user2 = new Person();
var user3 = new Person();
console.log(Person.data);
user1.before();
// Output: Hello, my name is Ahmed
