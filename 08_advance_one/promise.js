//Promise is an object represents the eventual completion or faliure of an asynchronous operation and its resulting value..
//It has three states- pending, fulfilled and rejected

//Creating promise

const promise1 = new Promise(function(resolve, reject){
    //Do an async task
    //database calls, cryptography, network
    setTimeout(function(){
        console.log('Async task is completed');
        //to connect resolve and .then we use--
        resolve()
    }, 1000)
})

//Consumtion of promise
// .then is directly connected with resolve

promise1.then(function(){
    console.log("Promise Consumed");
})

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async Task 2");
        resolve()
    },1000)
}).then(function(){
    console.log("Async 2 resolved");
    
})


const promise3 =  new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "Ishita", email: "ishita@gmail.com"})
    },1000)
})

promise3.then(function(user){
    console.log(user);
    
})

const promise4 =  new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true //when we make the error false it does not show any error
        if (!error) {
            resolve({username: "ishita", password: "123"})
        } else{
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})

promise4.then((user) => {
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username);  
}).catch(function(error){
    console.log(error);  
}).finally(() => console.log("The promise is resolved or rejected "));


const promise5 = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true //when we make the error false it does not show any error
        if (!error) {
            resolve({username: "javascript", password: "123"})
        } else{
            reject('ERROR: JS went wrong')
        }
    }, 1000)
});

async function consumePromiseFive(){
    try {
        const response = await promise5
        console.log(response);    
    } catch (error) {
        console.log(error);
    }   
}
consumePromiseFive()