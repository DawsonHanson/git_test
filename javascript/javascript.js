let name = prompt ('What is your name?');

alert(`Hello ${name}, nice to meet you!`)

console.log("hello world")

let age = prompt ('Please state your age');
let myNum = Number(age)
if (myNum >= 14 && myNum <= 90) {
  alert ('Access Granted')
} else  {
  alert ('Sorry! Your age does not fit the parameters')
}

console.log (typeof myNum)
console.log (typeof age)

let user = prompt ('Account Name');
const userAdmin = 'Admin'
const passWord = 'TheMaster'
let pwd = ''
  if (user == userAdmin) 

    {let pwd = prompt ('Password')
    if (pwd == passWord) 
    {alert ('Welcome!') } 
    else if (pwd == '' || pwd == null) 
    {alert ('Canceled')}
    else 
    {alert ('Wrong Password')}}
    
  else if (user == '' || user == null) 
  {alert ('Canceled')}
  else 
  {alert ('Access Denied')}

console.log (typeof userAdmin)
console.log (typeof user)

// function practice//

let x = prompt ('+7 to the inserted number')
let add7 = function () {
  let y = (+x + 7);
  return y;
}
alert (add7 ())

function multiply () {
  let y = prompt ('multiple y*z, value for y?')
  let z = prompt ('value for z?')
  let c = (+y * +z)
  return c;
}
alert (multiply ())

function capitalize () {
  let string = prompt ('insert text, will capitalize the first letter only')
  let firstLetter = string.substring(0, 1).toUpperCase ()
  let stringBody = string.substring(1).toLowerCase () 
  let newString = firstLetter + stringBody;
  return newString;
}
alert (capitalize ())

function lastLetter () {
  let string = prompt ('insert text, will grab the last letter')
  let newString = string.slice(-1)
  return newString;
}
alert (lastLetter ())

// Fizz Buzz with for-loop/ functions //

function fizzBuzz () {
  let answer = parseInt(prompt ('Please enter a number'))
  for (let x = 1; x <= answer; x++) {
    if (x % 3 == 0 && x % 5 == 0) {
      console.log ('FizzBuzz')
    }
    else if (x % 3 == 0 ) {
      console.log ('Fizz')
    }
    else if (x % 5 == 0) {
      console.log ('Buzz')
    }
    else {
      console.log (x)
    }
  }
} 
console.log (fizzBuzz())