const coding = ["js", "ruby", "pyhton", "cpp", "java"]


//forEach is used for callback function
//it is a callback function so it does not have any name
coding.forEach( function (item) {
    //console.log(item);
})

coding.forEach( (item) => {
    //console.log(item);
})

function printMe(item){
   // console.log(item);
}
coding.forEach(printMe)


coding.forEach( (item, index, arr) => {
   // console.log(item, index, arr);
})


const myCoding = [
    {
        languageName: "javascript",
        languageFileNmae: "js"
    },
    {
        languageName: "java",
        languageFileNmae: "java"
    },
    {
        languageName: "pyhton",
        languageFileNmae: "py"
    }
]

myCoding.forEach((item) => {
    console.log(item.languageName);
})