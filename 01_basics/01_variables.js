const accountId = 144553
let accountEmail = "ishita@gmail.com"
var accountPassword = "12345"
accountCity = "delhi"

// accountId = 2 // not allowed

accountEmail = "ishu@gmail.com"
accountPassword = "09876"
accountCity = "uk"

console.log(accountId);

console.table([accountId,accountEmail,accountPassword,accountCity])

// we should prefer not to use var because of issue in block scope and functional socpe