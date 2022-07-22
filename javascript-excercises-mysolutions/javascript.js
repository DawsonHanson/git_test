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