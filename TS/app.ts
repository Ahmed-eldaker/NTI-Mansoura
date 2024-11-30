console.log("hello from ts");
let test:number =5
console.log(test);
// test=12
// test=10

// test=""
// x="15"
// test="asd"
// class Person{} 
let str:string="asd"
str="10"

let bool:boolean
// console.log(bool);
bool=true

let arr:number[] =[1,2,3]
arr.push(5)
console.log(arr);

let x:any=5
x=[]
x=1
x=""
x=true
x=function(){}
let y :(string|number|number|( ()=>void))[]=[]
// y=5
// y=""
// y=[]
function callFunc<T>(value:T) :T{
   

   
    console.log("inside Func");
    return value
}
let e:number=callFunc<number>(5)+5
let f:string=callFunc<string>("10")+5

// let c:number =callFunc()+5
console.log(e);
enum Color{admin,user} 
let d:Color;
d=Color.admin
interface IPerson {
    name: string;
    age: number;
    sayHello()
  }
  const user:IPerson={
      name: "",
      age: 0,
      sayHello: function () {
         console.log();
         
      }
  }
class Human{
    before(){
        console.log("before");
    }
}
  class Person extends Human implements IPerson{
   static data=0

  constructor(){
    super()
    Person.data++
  }
      name: string
      age: number;
      sayHello() {
          throw new Error("Method not implemented.");
      }
  
    greet(): void {
        console.log("inside");
        
    //   console.log(`Hello, my name is ${this.name}`,"my age is " ,this.age);
    }
  }
  
  const user1 = new Person();
  const user2= new Person();
  const user3 = new Person();
console.log(Person.data);
user1.before()

// Output: Hello, my name is Ahmed