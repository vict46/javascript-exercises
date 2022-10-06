const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
	return a - b
};

const sum = function(args) {
  return result = [...args].reduce((a, b) => a + b, 0);
};

const multiply = function(args) {
  return result = [...args].reduce((a, b) => a * b);
};

const power = function(a, b) {
	return a ** b
};

const factorial = function(a) {
  if (a == 0) {
    return 1;
  }
	let result = a;
  while (a > 1) {
    result = result * (a - 1);
    a = a - 1;
  }
  return result
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
