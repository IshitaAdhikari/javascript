//defination of function
function sayMyName(){
    console.log("Ishita");
}

//refrence of function
sayMyName() //execution

/*function addTwoNumbers(number1, number2){
    console.log(number1 + number2);
}*/

function addTwoNumbers(number1, number2){

    let result = number1 + number2
    return result //after this return statement no other statement works
}


const result = addTwoNumbers(3, 4)

console.log("Result: ", result); //but it gives the value undefined


function loginUserMessage(username){
    if(username === undefined){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

console.log(loginUserMessage("ishita"));
//when we pass no value in this it gives us undefined value



//when we pass various values than only first value is printed so to solve this problem
//we have rest... operator
//we get an array of items than

function calculateCartPrice(...num1){
    return num1
}
console.log(calculateCartPrice(200,400,700));

 //when we add val1, val2 than first two values are given to them and rest to the array

 function calculateCartPrice1(val1,val2,...num1){
    return num1
 }
 console.log(calculateCartPrice1(300,500,400,900));
 


 //how to pass a object to function and use it

 const user ={
    username: "ishita",
    price: 199
 }

 function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
    
 }

 handleObject(user)


 //how to pass array in function

 const myNewArray = [200,400,100,600]

 function returnSecondValue(getArray){
    return getArray[1]
 }

 console.log(returnSecondValue(myNewArray));
 