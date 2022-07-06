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