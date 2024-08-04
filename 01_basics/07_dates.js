// It represents a single moment time in a platform independent format in ms

let myDate =  new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());

console.log(typeof myDate); //most important qs for interview (object)

let myCreatedDate = new Date("2024, 8, 4")
console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
//to conver this miliseconds time to seconds
console.log(Math.floor(Date.now()/1000));


let newDate = new Date()
console.log(newDate.getDay());

//to coustomise we use

newDate.toLocaleString('default', {
    weekday: "long"
})

