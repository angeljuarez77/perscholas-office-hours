// What is a callback?

// According to MDN
// "A callback function is a function passed into another functionas an argument,
// which is then invoked inside the outer to complete some kind of routine or action"
// https://developer.mozilla.org/en-US/docs/Glossary/Callback_function

// when we're creating a function the variable(s) inside of the parentheses ()
// are called PARAMETER(S)
function add(x, y) {
  return x + y;
}
// a function that takes in parameter x && parameter y. Adds them. Then returns the value.

function subtract(x, y) {
  return x - y;
}
// a function that takes in paramet x && parameter y. Subtracts them. Then return the value.


// now let's use make a function that takes in a function(s) as a PARAMETER(S)
function addThenSubtract(firstFunction, secondFunction) {
  const addResult = firstFunction(2, 2); // here we assume that firstFunction would be a function and we invoke it with the arguments 2 and 2.
  const subtractResult = secondFunction(addResult, 10); // here we assume secondFunction is also a function and we invoke it with the arguments addResult and 10
  return subtractResult; // now we return the final result
}

// now let's invoke our addThenSubtract function
// I will invoke my function and pass in the add function and the subtract function as arguments.
// BOTH the add() and the subtract() function are now callbacks.
const result = addThenSubtract(add, subtract);

console.log(result);
