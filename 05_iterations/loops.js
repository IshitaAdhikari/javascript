//for of

const arr = [1, 2, 3, 4, 5,]

for (const num of arr) {
   // console.log(num);
}


const greetings = "Hello World"
for (const greet of greetings) {
    //console.log(`Each char is ${greet}`);   
}

//Maps-------
//It is a object which holds key value pair
//no duplicate values only unique values

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States Of America")
map.set('Fr', "France")
//console.log(map);

for (const [key, value] of map) {
    //console.log(key, ':-', value);
}


const myObject = {
    'game1' : 'NFS',
    'game2' : 'Spiderman'
}

for (const [key, value] of myObject) {
    console.log(key, ':-', value);
}

//In objects this forof loop does not works
//because objects are not iterable