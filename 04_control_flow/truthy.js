const userEmail = ""
if(userEmail){
    console.log("Got user email");
}
else{
    console.log("Don't have an email");
} //this type is known as truthy values

//falsy values---
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values-
//"0", "false", " ", [], {}, function(){}

if(userEmail.length === 0){
    console.log("Array is empty");
}

const emptyObj = {}

if(Object.keys(emptyObj).length === 0){
    console.log("Object is empty");
}


//Nullish Coalescing Operator (??) : null undefined

let val1;
val1 = 5 ?? 10
//The value here will be 5 but it is used for special cases
val2 = null ?? 10
//Here the value is 10


//Terniary Operator
//condition ? true : false

const iceTeaPrice = 100
iceTeaPrice >= 80 ? console.log("less than 80") : console.log("more than 80");
