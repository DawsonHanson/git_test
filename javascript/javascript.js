let name = prompt ('What is your name?');

alert(`Hello ${name}, nice to meet you!`)
alert(`${name}, I think thats an awesome name`)

console.log("hello world")

const age = prompt ('How old are you?');
let myNum = Number(age)
if (myNum >= 14 && myNum <= 90) {
  alert ('Enjoy your stay!')
} else  {
  alert ('Sorry! You\'re either to young or to old to be here!.')
}

console.log (typeof myNum)
console.log (typeof age)

let user = prompt ('Who are you?');
let admin = 'Admin'
if (user = admin) {
  prompt ('Password?')
} else {
  alert ('Sorry! I don\'t know you.')
}

console.log (typeof admin)
console.log (typeof user)