// "var" variables can be reassigned - the console does not yell at you for defining the same variable in the same scope. 
// "var" variables are function scoped or global scoped. 
// If we define a "var" variable in a block scope - it will be scoped globally (or function scoped if the block was in a function)

// "let" is block scoped 
// "const" is also block scoped 
// We can't declare the same variable in the same scope with "let" or "const". 
// "const" variables can not be updated but they are mutable. 
// If we want to make an object immutable we can use Object.freeze(person). 

// Immediately invoked function expression or (IIFE) is a function that runs itself imidiately and it creates a scope where nothing is gonna leak into the parent scope. 
// "let" and "const" solve that. 
// Solves the for loop probles when "var" variables leak into the global scope from a block scope. 

// Temporal dead SVGZoomEvent. You can console.log a variable before it is defined with the var keyword. You get "undefined". 
// With "const" and "let" you can not do it. 

// When writing JavaScript I will use "const" by default. "let" when it needs to be rebinded. I won't use "var". 
