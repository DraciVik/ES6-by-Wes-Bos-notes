// // Function improvements and default parameters 

// // Arrow functions main benefits:

// // - Much more concise 
// // - They have implicit return 
// // - Doesn't rebind the value of "this" when we use an arrow function inside of another function 

// // const names = ["wes", "kait", "lux"];

// // const fullNames = names.map(function(names) {
// //     return `${name} bos`
// // });

// // const fullNames2 = names.map((name) => {
// //     return `${name} bos`;
// // });

// // const fullNames3 = names.map(name => {
// //     return `${name} bos`;
// // }); - We can ommit the prenthesys around the paramater when we have only one. 

// // const fullNames4 = names.map(name => `${name} bos`); - This is called implicit return. When we return a one liner there is no need for the "return" statement and curly brackets. 

// // const fullNames5 = names.map(() => `cool bos`) - when we have no arguments. 

// // Arrow functions are always anonymous functions

// // We can store an arrow function in a variable: 

// // const sayMyName = (name) => {
// //     alert(`Hello ${name}`);
// // };

// // sayMyName()

// ARROW FUNCTIONS AND "this" 

// When we use an arrow function the value of "this" does not get rebound inside of that function. It is just inherited from whatever the parent scope is. 

// const box = document.querySelector("box");
// box.addEventListener("click", () => {
//     console.log(this);
// });
// In this case "this" refers to the windows because it's an arrow function. (the no rebinding rule);

// const box = document.querySelector("box");
// box.addEventListener("click", function() {
//     this.classList.toggle("opening");
// });
// In this case "this" is now rebound to box. 

// const box = document.querySelector("box");
// box.addEventListener("click", function() {
//     this.classList.toggle("opening");
//     setTimeout(function() {
//         this.classList.toggle("open");
//     });
// });
// In this case the function inside "setTimeout" is not bound to anything so "this" refers to the window object. This is where we can use arrow functions. 

// const box = document.querySelector("box");
// box.addEventListener("click", function() {
//     this.classList.toggle("opening");
//     setTimeout(() => {
//         this.classList.toggle("open");
//     }, 500);
// });
// In this case it works because arrow functions inherit the value of "this" from the parent. 
