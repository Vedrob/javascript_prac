let score = "33aa"
console.log(typeof score);
let conv = Number(score)
console.log(conv); // Nan
console.log(typeof conv) // number

let LoggedIn = "vedansh"
let ConvLoggedIn = Boolean(LoggedIn)
console.log(ConvLoggedIn); // false  for " " and true for "vedansh"