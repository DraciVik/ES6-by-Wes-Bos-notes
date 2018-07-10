// We can use tagged template literals to sanitize data. 

// Whenever we're displaying data from the user we must make sure that the user is not inserting unwanted code. 

// To sanitize a data we can use tagged templates. 

// function sanitize(strings, ...values) {
//     const dirty = strings.reduce((prev, next, i) => `${prev}${next}${values[i] || ""}`, "");
//     return DOMPurify.sanitize(dirty);
// }