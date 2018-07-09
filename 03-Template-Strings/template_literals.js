// // We use backticks "``" for template literals 
// // With "${}" we can do regular JavaScript inside of template literals.

// // const markup = `
// //     <div>
// //         ${person.name}
// //         <span class="job">${person.job}</span>
// //      <h2>
// //       <p class="location>${person.city}</p>
// //       <p class="bio">${person.bio}</p>
// //     </div>
// // `;

// // document.body.innerHTML = markup;

// // We can nest template strings inside of eachother 

// // const dogs = [
// //     {name: "Snickers", age: 2},
// //     {name: "hobo", age: 8},
// //     {name: "Sunny", age: 1}
// // ];

// // const markup = `
// //     <ul class="dogs">
// //         ${dogs.map(dog => `<li>${dog.name} is ${dog.age * 7}</li>`).join("")}
// //     </ul>
// // `;

// // In this case map returns an array meaning that every <li> is separeted with a colon;

// When we need an if statements we use a ternirary operator. 

// const markup = `
//     <div class="song">
//     <p>
//         ${song.name} - ${song.artist}
//         ${song.featuring ? `(featuring ${song.featuring}` : ""}
//         </p>
//     </div>
// `;

// When data becomes too complex and we need to refactor we can use the react example - components. 

// const beer = {
//     name: -----,
//     brewery: ----
//     keywords: [....]
// };

// function renderKeywords(keywords) {
//     return `
//         <ul>
//         ${keywords.map(keyword => `<li>${keyword}</li>`).join("")};
//         </ul>
//     `;
// };

// const markup = `
//     <div class="beer">
//     <h2>${beer.name}</h2>
//     <p class="brewery">${beer.brewery}</p>
//     ${renderKeywords(beer.keywords)}
//     </div>
// `;

// document.body.innerHTML = markup;