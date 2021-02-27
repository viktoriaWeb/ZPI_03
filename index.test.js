const assert = require('assert');
const  Calc = require('./calc.js');

assert.equal(typeof Calc.Taylor,'function');

var t = Calc.Taylor(1);


