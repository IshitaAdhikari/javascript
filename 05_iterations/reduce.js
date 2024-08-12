const myNums = [1, 2, 3]

/*const myTotal = myNums.reduce(function (acc, currvalue) {
    console.log(`acc: ${acc} and currvalue: ${currvalue}`);
    
    return acc + currvalue
}, 0)*/ //The value after , is the value of acc at first 


const myTotal = myNums.reduce((acc, currvalue) => acc+currvalue, 0)
console.log(myTotal);


const shoppingCart = [
    {
        itemName : "js course",
        price: 2999
    },
    {
        itemName : "py course",
        price: 999
    },
    {
        itemName : "mobile dev course",
        price: 5999
    },
    {
        itemName : "ds course",
        price: 12999
    }
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)
console.log(priceToPay);
