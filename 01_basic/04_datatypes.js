// stack(primitive) and heap(non primitive)
let user1 = {
    email:"vedansh.google.com",
    upi:"ved@ybl"
}

user2 = user1

user2.email = "new@gmail.com"
//console.log(user2.email);
//console.log(user1.email);

//imp
console.log(Math.random());
console.log((Math.random()*10)+1);

const max = 20
const min = 10

console.log(Math.floor(Math.random()*(max-min+1)) +min);
