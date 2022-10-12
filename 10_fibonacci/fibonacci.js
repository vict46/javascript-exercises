const fibonacci = function(n) {
    if (n == 1) { return 1}
    if (n < 1) {return "OOPS"}
    let increment = 0;
    let sum = 1 + increment;
    for (let index = 0; index < n-1; index++) {
        prevsum = sum
        sum = sum + increment;
        increment = prevsum;
    }
    return sum;
};

// Do not edit below this line
module.exports = fibonacci;


// n = 1, sum = 1, inc = 1
// n = 2, sum = 2, inc = 2