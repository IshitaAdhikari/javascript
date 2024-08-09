//Javascript Execution Context

//we always have a Global Execution Context
// another is Function Execution Context
// Eval Execution context it is a property f global execution context

//How javascript code is executed---
//First case - Memory Creation Phase 
//Second case - Execution Phase

let val1 = 10
let val2 = 5
function addNum(num1, num2){
    let total = num1 + num2
    return total
}
let result1 = addNum(val1, val2)
let result2 = addNum(10, 2)

//Now the steps of how this code will be executed
//Step1- we have a Global Execution and is allocated in this
//Step2- Memory Phase we take all variables and keep with us
//val1 - undefined and in addNum - defination result1 - undefined
//Step-3 Execution Phase
//val1 - 10 val2 - 5 
//addNum makes than another execution thread and new variable environment
//Now Memory Phase and Execution Phase will again execute for add number 
//Memory Phase - val1, val2, total- undefined 
//Execution Phase- num1-10 num2- 5 total- 15
//And now than execution context is deleted
//Now total value gets return to Global Execution 
//And execution phase will have result 15



//Call Stack------------
//Global Execution And than Functions are added to the stack
//And here the lifo works