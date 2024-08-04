const score = 400
console.log(score);

const balance = new Number(100)
console.log(balance);
console.log(balance.toString());
console.log(balance.toFixed(2));

const otherNumber = 23.8999
console.log(otherNumber.toPrecision(3)); //it gives the precised value and returns in form of string


const hundreds = 1000000
console.log(hundreds.toLocaleString()); // it gives commas acc to us standard

 
//Maths

console.log(Math);//object with many properties
console.log(Math.abs(-4)); //it gives the absolute value it changes negative value to positive
console.log(Math.round(4.6));//give roundoff
console.log(Math.ceil(4.2));//gives upper roundoff value
console.log(Math.floor(4.9));//gives lower roundoff value

//we will use math library most in random

console.log(Math.random()); // it always gives value between 0 and 1
console.log((Math.random()*10) + 1); // to avoid the value giving 0 we add 1 to it

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)  



