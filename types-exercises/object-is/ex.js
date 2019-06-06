// TODO: define polyfill for `Object.is(..)`
// if (!Object.is) {
Object.is = function ObjectIs(x, y) {
  // problem is, NaN === NaN returns false
  if (Number.isNaN(x) === Number.isNaN(y)) {
    return true;
  }

  // problem is -0 === 0 is true
  if (x === y) {
    console.log('in here');
    console.log('signs', sign(x), sign(y));
  }

  // test case for anything besides NaN and -0
  if (x === y) {
    return true;
  } else {
    return false;
  }
};
// }

// tests:
console.log('42,42', Object.is(42, 42) === true);
console.log("'foo', 'foo'", Object.is('foo', 'foo') === true);
console.log('false, false', Object.is(false, false) === true);
console.log('null, null', Object.is(null, null) === true);
console.log('undefined, undefined', Object.is(undefined, undefined) === true);
console.log('NaN, NaN', Object.is(NaN, NaN) === true);
console.log('-0,-0', Object.is(-0, -0) === true);
console.log('0, 0', Object.is(0, 0) === true);

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
