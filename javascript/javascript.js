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

// function for launch countdown

function launch () {
  let x = 10
  while (x >= 0) {
    if (x === 10) {
      console.log (`Countdown ${x}`)
    } else if (x === 0) {
      console.log ('Blastoff!')
    } else {
      console.log (`${x}`)
    }
    x--
  }
}
console.log (launch())

// DOM practice

const container = document.querySelector('#container');

const redPara = document.createElement('p');
redPara.classList.add('redPara');
redPara.textContent = 'Hey I\'m red!';
redPara.setAttribute('style', 'color: red;');
container.appendChild(redPara);

const blueHeader = document.createElement('h3');
blueHeader.classList.add('blueHeader');
blueHeader.textContent = 'I\'m a blue h3!';
blueHeader.setAttribute('style', 'color: blue');
container.appendChild(blueHeader);

const containerPink = document.createElement('div');
containerPink.classList.add('containerPink');
containerPink.setAttribute('style', 'border-color: black; border-size: 2px; background-color: pink;');
container.appendChild(containerPink);

const containerPinkHeader = document.createElement('h1');
containerPinkHeader.classList.add('containerPinkHeader');
containerPinkHeader.textContent = 'I\'m in a div!';
containerPink.appendChild(containerPinkHeader);

const containerPinkPara = document.createElement('p');
containerPinkPara.classList.add('containerPinkPara');
containerPinkPara.textContent = 'ME TOO!';
containerPink.appendChild(containerPinkPara);

// creating/ deleting/ returning object properties
let user = {}

user.name = 'John'
user.surname = 'Smith'
console.log(user.name)
user.name = 'Pete'
console.log(user.name)
console.log('name' in user)
delete user.name 
console.log('name' in user)

// for ...in loop, similar to forEach
let schedule = {}

console.log(isEmpty(schedule))

function isEmpty(x) {
  for (let obj in x) {
    return false;
  } 
    return true;
}
schedule['8:30'] = 'get up'

console.log(isEmpty(schedule))

// for ...in loop to sum all values

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
}

function sumAll (x) {
  let sum = Number();
  for(let value in x) {
    sum += x[value]
  }
  return sum;
}

console.log(sumAll(salaries))

// for ...in loop to multiply value, or return value in NaN

let menu = {
  width: 200,
  height: 300,
  title: 'My menu'
}

function multiplyNumber(x) {
  for (let value in x) {
    let sum = x[value] * 2
    if (typeof x[value] == 'number') {
      console.log(sum)
    } else {
    console.log(x[value])
    }
  }
}

multiplyNumber(menu)