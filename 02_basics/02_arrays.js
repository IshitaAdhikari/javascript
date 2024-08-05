const marvel_heros = ["thor", "ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

marvel_heros.push(dc_heros)

console.log(marvel_heros);

//Array can take any type of the data that is it can take an array itself in it
//push gives us in exisiting array

//concat gives us a new array
const allHeros = marvel_heros.concat(dc_heros) //it is same as push
console.log(allHeros);
 
//spread operator
const all_new_heros = [...marvel_heros, ...dc_heros] //it is same as concat but it spreads the element
console.log(all_new_heros);


const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
//flat helps in making like this arrays in one single array
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);


console.log( Array.isArray("Ishita"));//tells if it is a array or not
console.log(Array.from("Ishita"));//changes any object to array
console.log(Array.from({name: "ishita"})); 
//the result gives empty array beacuse we have to tell wether we have to make arrays with keys or the values


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); //it converts the value to array

