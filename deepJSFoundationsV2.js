//prettier-ignore
var x = 40;

x++; //40 post-increment
x; //41

++x; //42 pre-increment
x; //42
// x++ coerces x so if you put in "5"
var x = '5';
x++;
x; //6, even though it's a string

// in JavaScript, everything is an object
false;
// false is one of those examples of something that is not an object

/* PRIMITIVE TYPES */
// undefined, null, boolean, string, symbol, number, and object
// undefined
// string
// number
// boolean (true false)
// object
// symbol (not common used in frameworks)

// what about undeclared? are these types? null? null is not a type
// what about functions? function is a subtype of the object type
// arrays are a subtype of the object type
// bigint support? (not yet but will be a primitive type soon)

// what is the type of the value that is currently in v.
// JS typeof is about the value, not the variable. values have types
// variables do not have types.
var v;
typeof v; //'undefined', does not currently have a value
v = '1';
typeof v; //"string"
v = 2;
typeof v; //"number"
v = true;
typeof v; //"boolean"
v = {};
typeof v; //"object"
v = Symbol();
typeof v; //"symbol"

// typeof always returns a string! this is important
(typeof v === undefined)(
  // will never be true
  typeof v === 'undefined'
); // is correct way to check this

typeof doesntExist; //"undefined"
var v = null;
typeof v; // "object" this is a bug should say null but can't fix this
v = function() {};
typeof v; // "function"
v = [1, 2, 3];
typeof v; //"object" can use array.isArray instead

// UNDEFINED VS UNDECLARED
// undeclared means its never been created in any scope we have access to
// undefined means theres definited a varaible at the moment it has no value
// typeof can reference something that doesn't exist and not throw an error
// uninitialized is also emptiness

// NaN & isNaN
// invalid number is a better mental model
var myAge = Number('0o46'); //38
var myNextAge = Number('39'); //39
var myCatsAge = Number('n/a'); //NaN
myAge - "my son's age"; //NaN coerces the string into the NaN value

myCatsAge === myCatsAge; //false OOPS! NaN's are not equal to eachother, doesnt have identity property
NaN === NaN; // false, only value in JavaScript not equal to itself

isNaN(myAge); //false
isNaN(myCatsAge); //true
isNaN("my son's age"); //true OOPS! coerced values to number before
// and what number did it coerce it to? the NaN value
// so of course it'll return true

Number.isNaN(myCatsAge); //true //Number.isNaN() doesn't do any coercion for us
Number.isNaN("my son's age"); //false
typeof NaN; //is a number, but this type is Invalid Number

var trendRate = -0;
trendRate === -0; //true

trendRate.toString(); //"0" OOPS!
trendRate === 0; //true OOPS!
trendRate < 0; //false
trendRate > 0; //false

Math.sign(-3); //-1
Math.sign(3); //1
Math.sign(-0); //-0 WTF?
Math.sign(0); // 0 WTF

Object.is(trendRate, -0); //true
Object.is(trendRate, 0); //false kindof like ==== quadruple equal, only way to test for negative 0 (-0)

// can use Object.is(myCatsAge, NaN) to check for NaN

// FUNDAMENTAL OBJECTS
// aka built-in object or Native Functions
// bolted on Object Oriented of JavaScript

// Use new for:
// Object()
// Array()
// Function()
// Date()
// RegExp()
// Error()

// Don't use new for:
// String()
// Number()
// Boolean()

var yesterday = new Date('March 6, 2019');
yesterday.toUTCString();
// "Wed, 06 Mar 2019 06:00:00 GMT"

var myGPA = String(transcript.gpa);
// "3.54"

// ABSTRACT OPERATIONS
// perform type conversion or coercion
// ToPrimitive(hint)
// hint "number"
// valueOf()
// toString()
// hint "string"
// toString()
// valueOf()

// ToString
// gives the string representation of a value in string form
null; //"null"
undefined; //'undefined'
// toString
