const accountId = 14453
let accountEmail = "neel@google.com"
var accountPassword = "1234"
accountCity = "Chennai"  //we can declare variable like this also
let accountState; //undefined


// accountId = 2 //not allowed

accountEmail = "hc@hc.com"
accountPassword ="21211"
accountCity = "Benguluru"

console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

/*
Prefered Not to use var
because of issue in block scope and functional scope
*/

