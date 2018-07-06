// Function improvements and default parameters 

// Arrow functions main benefits:

// - Much more concise 
// - They have implicit return 
// - Doesn't rebind the value of "this" when we use an arrow function inside of another function 

// const names = ["wes", "kait", "lux"];

// const fullNames = names.map(function(names) {
//     return `${name} bos`
// });

// const fullNames2 = names.map((name) => {
//     return `${name} bos`;
// });

// const fullNames3 = names.map(name => {
//     return `${name} bos`;
// }); - We can ommit the prenthesys around the paramater when we have only one. 

// const fullNames4 = names.map(name => `${name} bos`); - This is called implicit return. When we return a one liner there is no need for the "return" statement and curly brackets. 

// const fullNames5 = names.map(() => `cool bos`) - when we have no arguments. 

// Arrow functions are always anonymous functions

// We can store an arrow function in a variable: 

// const sayMyName = (name) => {
//     alert(`Hello ${name}`);
// };

// sayMyName()