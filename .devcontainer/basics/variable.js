const accountId = 565656
let accountEmail = "rama@gmail.com"
var accountPassword = "6025667"
accountCity = "lucknow"

// accountId = 3 // not allowed

accountEmail = "sanu@gmail.com"
accountPassword = "56273"
accountCity = "Manhattan"

console.log(accountPassword)

/*
prefer not to use var because of issue in block scope and functional scope 
*/




console.table([accountId, accountEmail, accountPassword, accountCity])