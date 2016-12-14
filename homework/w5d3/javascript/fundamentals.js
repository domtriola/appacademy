/* Scope
**********/


// // var is function scope
// function mysteryScoping1() {
//   var x = 'out of block';
//   if (true) {
//     var x = 'in block';
//     console.log(x);
//   }
//   console.log(x);
// }
// mysteryScoping1();
// // in block
// // in block
//
// // const is block scope
// function mysteryScoping2() {
//   const x = 'out of block';
//   if (true) {
//     const x = 'in block';
//     console.log(x);
//   }
//   console.log(x);
// }
// mysteryScoping2();
// // in block
// // out of block
//
// // var tries to redeclare constant
// function mysteryScoping3() {
//   const x = 'out of block';
//   if (true) {
//     var x = 'in block';
//     console.log(x);
//   }
//   console.log(x);
// }
// mysteryScoping3();
// // SyntaxError: Identifier 'x' has already been declared
//
// // let is block scope
// function mysteryScoping4() {
//   let x = 'out of block';
//   if (true) {
//     let x = 'in block';
//     console.log(x);
//   }
//   console.log(x);
// }
// mysteryScoping4();
// // in block
// // out of block
//
// // attempting to redeclare x with let in same scope
// function mysteryScoping5() {
//   let x = 'out of block';
//   if (true) {
//     let x = 'in block';
//     console.log(x);
//   }
//   let x = 'out of block again';
//   console.log(x);
// }
// mysteryScoping5();
// // SyntaxError: Identifier 'x' has already been declared




/* Functions
*************/

const madLib = (verb, adjective, noun) => {
  console.log(`We shall ${verb.toUpperCase()} the ` +
              `${adjective.toUpperCase()} ${noun.toUpperCase()}.`);
};
// madLib("make", "best", "guac");
// We shall MAKE the BEST GUAC.


const isSubstring = (string, sub) => {
  return string.indexOf(sub) > -1;
};
// console.log(isSubstring("time to program", "time"));
// // true
// console.log(isSubstring("Jump for joy", "joys"));
// // false
