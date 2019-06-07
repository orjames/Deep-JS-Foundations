// TODO: define polyfill for `Object.is(..)`
// if (!Object.is) {
Object.is = function ObjectIs(x, y) {
  //function to check if input is NaN
  isItNaN = input => {
    // returns boolean, true if its NaN
    return input !== input;
  };

  // function to check if input is -0
  isItNegZero = input => {
    // returns boolean, true if its -0
    if (input === 0 && 1 / input === -Infinity) {
      console.log(input, 'is neg 0');
      return true;
    }
  };
  var xNegZero = isItNegZero(x);
  var yNegZero = isItNegZero(y);

  // problem is, NaN === NaN returns false
  // if they're both NaN
  if (isItNaN(x) && isItNaN(y)) {
    return true;
    // problem is -0 === 0 is true
  } else if (xNegZero || yNegZero) {
    // returns bool if true
    if (xNegZero === true && yNegZero === true) {
      return true;
    }
  } else if (x === y) {
    return true;
  }

  return false;
};
// }

// tests:
console.log(Object.is(42, 42) === true);
console.log(Object.is('foo', 'foo') === true);
console.log(Object.is(false, false) === true);
console.log(Object.is(null, null) === true);
console.log(Object.is(undefined, undefined) === true);
console.log(Object.is(NaN, NaN) === true);
console.log(Object.is(-0, -0) === true);
console.log(Object.is(0, 0) === true);

console.log(Object.is(-0, 0) === false);
console.log(Object.is(0, -0) === false);
console.log(Object.is(0, NaN) === false);
console.log(Object.is(NaN, 0) === false);
console.log(Object.is(42, '42') === false);
console.log(Object.is('42', 42) === false);
console.log(Object.is('foo', 'bar') === false);
console.log(Object.is(false, true) === false);
console.log(Object.is(null, undefined) === false);
console.log(Object.is(undefined, null) === false);
