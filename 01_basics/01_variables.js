const accountId = 144553
let accountEmail = "vmittal062@gmail.com"
var accountPasword = "12345"
accountCity = "Bathinda" // Not a good method to store a variable
let accountState

// accountId = 2 // Not allowed

accountEmail = "vm@vm.com"
accountPasword = "212121"
accountCity = "Bangalore"

console.log(accountId);

/*
Prefer not to use var because of issue in 
block scope and functional scope 
*/

console.table([accountId, accountEmail, accountPasword, accountCity, accountState])
