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