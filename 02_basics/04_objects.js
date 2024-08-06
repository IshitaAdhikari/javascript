//object singleton
const tinderUser = new Object()

tinderUser.id = "123abc"
tinderUser.name = "Ishita"
tinderUser.isLoggenIn = false

console.log(tinderUser);

//object nonsingleton
const tinderUser1 = {}


const regularUser = {
    email: "abc@gmail.com",
    fullname: {
        userfullname:{
            firstname: "ishita",
            lastname: "adhikari"
        }
    }
}
console.log(regularUser.fullname.userfullname.firstname);


const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

//const obj3 = Object.assign({}, obj1, obj2) //combines the two objects
//another method
const obj3 = {...obj1, ...obj2}
console.log(obj3);


const users = [
    {
        id: 1,
        email: "ab@gmail.com"
    },
    {
        id: 2,
        email: "bc@gmail.com"
    }
]

users[1].email


console.log(Object.keys(tinderUser)); //by this we get the output datatype as array
console.log(Object.values(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));

