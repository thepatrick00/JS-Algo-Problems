// This is a concept used regularly in functional programming language like Haskell

// Currying a function is a way to partially apply parameters to a function.

// Regular
const multiply = (x, y) => x * y

// Curried
const curriedMultiply = x => y => x * y

// Curried funcction use closures to save values as we will see below
const multBy2 = curriedMultiply(2);
const multBy3 = curriedMultiply(3);

console.log(multBy2(10))
console.log(multBy3(10))

// Currying means that the closure does not have to recive all of its arguments at once, but separately.

// Partially Applied functions are a common use of currying