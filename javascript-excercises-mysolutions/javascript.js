// return string 
const repeatString = function(string, num) {
  if (num < 0) {
    return 'ERROR'
  }
  for (let x = 0; x <= 10; x++) {
    let multiString = string.repeat(num)
    return multiString;
  }
};

// Do not edit below this line
module.exports = repeatString;

const reverseString = function(string) {
  let arrayString = string.split('')
  let revString = arrayString.reverse()
  let newString = revString.join('')
  return newString;
};

// Do not edit below this line
module.exports = reverseString;

const removeFromArray = function(array, ...arg) {
  // array.forEach(function(currentValue, index, arr), thisValue)
  arg.forEach(function (x) { 
    // indexOf(searchElement, fromIndex)
    let index = array.indexOf(x);
    // The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.
    if (index > -1)
      array.splice(index, 1)
  })
  return array;

};

// Do not edit below this line
module.exports = removeFromArray;

const sumAll = function(num1, num2) {
  let message = 'ERROR'
  if (num1 !== Number(num1) || num2 !== Number(num2)) {
    return message;
  }

  if (num1 < 0 || num2 < 0) {
    return message;
  }
  
  // finds biggest number 
 let end = Math.max(num1, num2)
 // finds smallest number 
 let start = Math.min(num1, num2)
  // The sum of a series is equal to the (end + start)(num elements)/2.
 let answer = ((end + start)*(end))/2;
 
  return answer;
};

// Do not edit below this line
module.exports = sumAll;

const leapYears = function(year) {
  // Leap years are years divisible by four 
  // (like 1984 and 2004). However, years divisible 
  // by 100 are not leap years (such as 1800 and 1900) 
  // unless they are divisible by 400 (like 1600 and 2000, 
  // which were in fact leap years). 
  // (Yes, it's all pretty confusing)
  if (year % 100 === 0 && year % 400 === 0) {
  return true;
  } else if (year % 4 === 0 && year % 100 !== 0) {
    return true;
  } else {
    return false;
  }
};

// Do not edit below this line
module.exports = leapYears;

const ftoc = function(temp) {
  let answer = (temp - 32)* (5/9);
  let roundedAnswer = Math.round(answer * 10) /10;
  return roundedAnswer;
};

const ctof = function(temp) {
  let answer = (temp * (9/5)) + 32;
  let roundedAnswer = Math.round(answer * 10) /10
  return roundedAnswer;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};

// calculator 
const add = function(x,y) {
  return x + y
};

const subtract = function(x,y) {
	return x - y
};

const sum = function(array) {
	const total = array.reduce((x, item) => {
    return x + item
  }, 0);
  return total;
};

const multiply = function(array) {
  const total = array.reduce((x, item) => {
    return x * item
  }, 1);
  return total;
};

const power = function(x,y) {
  return x ** y
};

const factorial = function(y) {
  if (y === 0) {
    return 1;
  } else { 
    for (let x = y - 1; x >= 1; x--) {
    y *= x
  }
}
  return y;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};

const palindromes = function (string) {
  let newString = string.replace(/[^\w]/g,'')
  let string1 = newString.toLowerCase()
  let splitString = string1.split('')
  let revString = splitString.reverse()
  let string2 = revString.join('')
  if (string1 === string2) {
    return true;
  } else {
    return false;
  }
};

// Do not edit below this line
module.exports = palindromes;

const fibonacci = function(value) {
  let num = Number(value)
  if (num < 0) {
    return 'OOPS';
  }
  if (num == 1 || num == 0) {
    return num;
  }
  return fibonacci(num - 1) + fibonacci(num - 2);
};

// Do not edit below this line
module.exports = fibonacci;

const getTheTitles = function(array) {
  const titles = array.map((obj) => {
    return `${obj.title}`
  })
  return titles;
};

// Do not edit below this line
module.exports = getTheTitles;