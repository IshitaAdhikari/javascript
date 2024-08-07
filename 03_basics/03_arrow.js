const user = {
    username: "ishita",
    price: 599,

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`);
        console.log(this); //this tells us the current context
        
    }
}

user.welcomeMessage()
user.username= "abc"
user.welcomeMessage() //here the value changes

console.log(this);//here the current context is empty 


//imp-----the global object in browser is window object

function one(){
    let username = "ishita"
    console.log(this.username); //here it comes undefined because this does not work with functions
}
one()


const ab = () => { //it is the arrow function but still we cannot use this in this function
    let username ="ishita"
    console.log(this);
}


const addTwo = (num1, num2) => {
    return num1 + num2
}
console.log(addTwo(3, 4));

const addOne = (num1, num2) => (num1 + num2) //this is implicit return 
console.log(addOne(4+3));
 //so when we use curly braces than we have to use return and when we use brackets than we have not to use return


 const abc = (num1, num2) => ({username: "ishita"})//for object we have to use curly braces

 