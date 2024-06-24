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

const factorial = function(a) {
  
  if (a === 0) return 1; 
  let product = 1; 
  for(let i = a; i > 0; i--) {
    product = product * i;
  }
  return product;
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

