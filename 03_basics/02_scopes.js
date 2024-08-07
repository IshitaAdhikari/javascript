//var c=30

//when we declare var in a loop or scope than it still prints the value without being out of the loop

//the values which we write inside a loop is a block or local scope and
// which we write outside a loop is called a global scope 

let a =300
if(true){
    let a = 100
    const b = 90
    console.log("Inner: ", a);
    
}

console.log(a);


function one(){
    const username = "ishita"

    function two(){
        const website = "abc"
        console.log(username);
    }
    //console.log(website);
    two()
}
one()
// so like this when we have nested functions than the child can access the parent elements

if(true){
    const username = "ishita"
    if(username === "ishita"){
        const website = "abc"
        console.log(username + website);
    }
}


//in this there is no error and we get the value as 6
console.log(addone(5))
function addone(num){
    return num + 1
}

//here we get the error and we cannot use it before declaration
addTwo(5)
const addTwo = function(num){
    return num + 2
}
