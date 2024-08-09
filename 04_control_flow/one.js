//if and else---

const temperature = 40
if(temperature == 40){
    console.log("less than 50");
}
else{
    console.log("temperature is greater than 50");   
}

//conditions- <, >, <=, >=, ==, !=, ===, !==

const score = 200
if(score > 100){
    const power = "fly"
    console.log(`User Power: ${power}`);
}

const balance = 1000
if(balance < 500){
    console.log("less than 500");
}
else if(balance < 750){
    console.log("less than 750");
}
else{
    console.log("less than 1200");
}

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if(userLoggedIn && debitCard){
    console.log("Allow to purchase");
}
if(loggedInFromGoogle || loggedInFromEmail){
    console.log("User logged in");
}
