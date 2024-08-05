//objects can be declared by two methods litreal and constructor
 Object.create //singleton - when we declare in the form of constructoror

//obect literals

//imp---take a symbol and add it to the keys of object and print it
//when we have to print it as a symbol than we add a square bracket

const mySym = Symbol("key1")

const JsUser = {
    name: "Ishita",
    [mySym]: "mykey1", //imp---
    age: 20,
    location: "delhi",
    email: "ishita@gmail.com",
    isLoggedIn: false,
}

// how to access the object
console.log(JsUser.email);
//another method
console.log(JsUser["email"]); //but we have to give it as a string
console.log(JsUser[mySym]);


JsUser.email = "ishita@abc.com" //changing the value
//Object.freeze(JsUser) //now the values are freezed and cannot be changed


JsUser.greeting = function(){
    console.log("Hello JsUser");
}


JsUser.greetingTwo = function(){
    console.log(`Hello JsUser, ${this.name}`); //to refrence we change it to the back ticks
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
