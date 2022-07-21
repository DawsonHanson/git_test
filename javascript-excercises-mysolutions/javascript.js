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
