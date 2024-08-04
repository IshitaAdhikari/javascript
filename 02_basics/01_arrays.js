//It stroes a collection of multiple items in a single variable name
const myArr = [0, 1, 2, 3, 4, 5] //we always write arrays in square brackets
console.log(myArr[0]);

//Array copy operations creates shallow copies
//shallow copy it shares the same refrence point

//Array methods

myArr.push(6) //to add any value in the array
myArr.pop(6) //to remove the last element from the array
myArr.unshift(9) //it adds the value at the start of the array
myArr.shift()//it removes the starting value of array

console.log(myArr.includes(9));
console.log(myArr.indexOf(3));


const newArr = myArr.join() //it combines a the array and changes its type to string


//slice, splice

console.log("A", myArr);

const myn1 = myArr.slice(1,3) //it starts from the first element and does not include the last element

console.log(myn1);
console.log("B", myArr);

const myn2 = myArr.splice(1,3)
console.log("C", myArr);
console.log(myn2);

//The diffrence b/w slice and splice is in one range is included and in other it is not
//but the main diffrence b/w them is when we use the slice there is same array but in splice it divides the array in two parts


