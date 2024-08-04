const name = "ishita"
const repocount = 1

console.log(name + repocount); //concating

 //string interpolation new method of concating the string
console.log(`Hello my name is ${name} and my repo count is ${repocount}`);

const gameName = new String('ishita-abc')

console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4) // 4 does not get included in this
console.log(newString);

const anotherString = gameName.slice(-8, 4) // we can give negative value in this
console.log(anotherString);

const newStringOne = "  ishita   "
// we can see that sometimes there is extra space so to remove this we use trim
console.log(newStringOne);
console.log(newStringOne.trim());


const url = "https://ishita.com/ishita%20adhikari"
console.log(url.replace('%20', '-'));






