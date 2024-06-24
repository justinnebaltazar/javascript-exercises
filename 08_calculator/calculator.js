const add = function(a, b) {
	return a +  b;
};

const subtract = function(a, b) {
  return a - b;
};

const sum = function(arr) {

  let result = arr.reduce((result, current) => result + current, 0);
  return result;
};

const multiply = function(arr) {
  let product = arr.reduce((product, current) => product * current);
  return product;
};

const power = function(a, b) {
    return a ** b; 
};

const factorial = function() {
	
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

