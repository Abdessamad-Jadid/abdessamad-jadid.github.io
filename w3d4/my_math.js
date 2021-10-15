module.exports.add = (x, y) => x + y;

module.exports.subtract = (x, y) => x - y;

module.exports.multiply = (x, y) => x * y;

module.exports.divide = (x, y) => x / y;

module.exports.pi = 3.14;

const math = require('./my_math');
console.log("3 + 5 = " + math.add(3, 5));
console.log("3 - 5 = " + math.subtract(3, 5));
console.log("3 * 5 = " + math.multiply(3, 5));
console.log("3 / 5 = " + math.divide(3, 5));
console.log("PI = " + math.pi);