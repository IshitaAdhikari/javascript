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
    return `${username} just logged in`
}

console.log(loginUserMessage("ishita"));
//when we pass no value in this it gives us undefined value
 