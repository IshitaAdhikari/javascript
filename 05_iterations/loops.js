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


/*const myObject = {
    'game1' : 'NFS',
    'game2' : 'Spiderman'
}

for (const [key, value] of myObject) {
    console.log(key, ':-', value);
}*/

//In objects this forof loop does not works
//because objects are not iterable


//so for objects we use forin loop
const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: 'ruby',
    swift: 'swift by apple'
}

for (const key in myObject) {
   //console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming = ["js", "cpp", "ruby", "pyhton", "java"]

for (const key in programming) {
    console.log(programming[key]);
}
//for in loop gives the keys which starts from 0