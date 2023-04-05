const add = function(n1, n2) {
  return n1 + n2;
};

const subtract = function(n1, n2) {
  return n1 - n2;
};

const sum = function(arr) {
	let sum = 0;
  for (item of arr){
    sum += item;
  }
  return sum;
};

const multiply = function(arr) {
  product = 1;
  arr.forEach(element => {
    product *= element;
  });
  return product;
};

const power = function(base, exponent) {
  return base ** exponent;
};

const factorial = function(n) {
  let result = 1;
  for (let i = n; i > 0; i--){
    result *= i;
  }
  return result;
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
