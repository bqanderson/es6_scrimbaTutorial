/* --------------------------------------------- */
/* -- Template Literals Syntax Examples -------- */
/* --------------------------------------------- */

/* -- Global Variables ------------------------- */
let firstName = 'Brian';
let middleInit = 'Q';
let lastName = 'Anderson';

let num1 = 8;
let num2 = 5;
let operator1 = 'Multiplication';
let operator2 = 'Addition';

/* -- Concatenation with ES5 and earlier ------- */
var fullNameES5 = firstName + ' ' + middleInit + '. ' + lastName;

console.log(fullNameES5);      // Brian Q. Anderson

/* -- Concatenation with ES6 and beyond -------- */
const fullNameES6 = `${firstName} ${middleInit}. ${lastName}`;

console.log(fullNameES6);     // Brian Q. Anderson

/* -- Handling JS Operators (w/ multiline) ----- */
const example = `${operator1}: ${num1 * num2}
${operator2}: ${num1 + num2}`;

console.log(example);
