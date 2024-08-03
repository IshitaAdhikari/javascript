//primitive datatype
// string, number, boolean, null, undefined, symbol, bigint


const score =100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail; //undefined

//when we use symbol and add same thing it is not equal

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id == anotherId);



// refrence datatype or non primitive
// arrays, objects, functions

const heros = ["abc", "bcd", "cde"] //array
let myObj = {        //objects
    name: "ishita",
    age: 20,
}

const myFunction = function{
    console.log("abc");
}

//to find datatype of any value or thing

console.log(typeof outsideTemp);
//typeof null is object
//typeof object is function



//Memory- Stack(primitive) and Heap(non primitive)

let myname = "ishita"

let anothername = myname
anothername = "ishitaadhikari"

console.log(myname);
console.log(anothername);

// In stack we get the copy of the value but 
//in heap we get the refrence of the value

let userone ={
    email: "one@gmail.com",
    upi: "one@icici"
}

let usertwo = userone
