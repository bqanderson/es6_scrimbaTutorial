# Introduction to ES6+
  Notes and highlights from *Scrimba's* tutorial [Learn modern JavaScript through 23 screencasts][1].

## 1. Introduction
  This tutorial will cover core features of ES6 plus some newer, useful features of both ES7 and ES8. Included in this turorial are also *17 lessons* and *4 challenges.* The goal of the course is to refresh my JS skills and increase my knowledge of new features in ES6 and beyond. The course is hosted by [Dylan Isreal][di-linked].

  You can find Dylan at the following locations:

  + [CodeTutorials360][cT360]
  + [LinkedIn][di-linked]
  + [GitHub][di-github]
  + [Twitter][di-twitter]
  + [Facebook][di-fbook]
  + And for further screencasts, [YouTube][di-youtube]

## 2. Template Literals
  With ES6 JavaScript addresses the pain points surrounding its (poor) handling of the `string` data type. This is done mostly through *Template Literals*. Using the new syntax simplifies the way we concatenate stings in JavaScript.

  By using *Template Literals* (` `${variable1}` `) JS code will now handle spaces and returns as one might imagine (literally).

  The same logic can be applied to the handling of *variables* and *operators* as well. While within a *Template Literal* JavaScript works as JavaScript should.

__*Example Syntax*__

  Concatenation ES5 and earlier:
  ```javascript
  var firstName = 'Brian';
  var middleInit = 'Q';
  var lastNameES5 = 'Anderson';

  var fullName = firstName + ' ' + middleInit + '. ' + lastName;
  console.log(fullName);      // Brian Q. Anderson
  ```

  Concatenation ES6 and beyond:
  ```javascript
  let firstName = 'Brian';
  let middleInit = 'Q';
  let lastNameES6 = 'Anderson';

  const fullName = `${firstName} ${middleInit}. ${lastName}`;
  console.log(fullName);      // Brian Q. Anderson
  ```

  *Template Literal* Handling JS Operators (with a multiline output)
  ```javascript
  let num1 = 5;
  let num2 = 8;
  let operator1 = 'Multiplication';
  let operator2 = 'Addition';

  const example = `${operator1}: ${num1 * num2}
  ${operator2}: ${num1 + num2}`;

  console.log(example);
  /* Multiplication: 40
  *  Addition: 13 */
  ```

<!-- External Links -->
[1]: https://scrimba.com/g/gintrotoes6
[di-youtube]: https://www.youtube.com/channel/UC5Wi_NYysX-LfcqT3Hq9Faw
[di-linked]: https://www.linkedin.com/in/dylan310/
[di-github]: https://github.com/PizzaPokerGuy
[di-twitter]: https://twitter.com/PizzaPokerGuy
[di-fbook]: https://www.facebook.com/dylan.c.israel
[cT360]: http://www.codingtutorials360.com/
