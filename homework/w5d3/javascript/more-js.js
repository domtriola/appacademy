// Callbacks

const printEach = (items) => {
  items.forEach(item => console.log(item));
};

const titleize = (names, printCallback) => {
  let titleized = names.map(name => `Mx. ${name} Jingleheimer Schmidt`);
  printCallback(titleized);
};
// titleize(["Mary", "Brian", "Leo"], printEach);
// Mx. Mary Jingleheimer Schmidt
// Mx. Brian Jingleheimer Schmidt
// Mx. Leo Jingleheimer Schmidt


// Constructors

function Elephant(name, height, tricks) {
  this.name = name;
  this.height = height;
  this.tricks = tricks;
}
Elephant.prototype.trumpet = function() {
  console.log(`${this.name} the elephant goes 'phrRRRRRRRRRRR!!!!!!!'`);
};
Elephant.prototype.grow = function() {
  this.height += 12;
};
Elephant.prototype.addTrick = function(trick) {
  this.tricks.push(trick);
};
Elephant.prototype.play = function() {
  let trick = this.tricks[Math.floor(Math.random() * this.tricks.length)];
  console.log(`${this.name} is ${trick}!`);
};
let pinky = new Elephant("Pinky", 120, ["Flying", "Adventuring"]);
pinky.grow();
// // 132
// console.log(pinky.height);
pinky.addTrick("Flying");
pinky.addTrick("Adventuring");
// pinky.trumpet();
// // Pinky the elephant goes 'phrRRRRRRRRRRR!!!!!!!'
// pinky.play();
// // Pinky is Flying!
// pinky.play();
// // Pinky is Adventuring!


// Function Invocation

let ellie = new Elephant("Ellie", 185, ["giving human friends a ride", "playing hide and seek"]);
let charlie = new Elephant("Charlie", 200, ["painting pictures", "spraying water for a slip and slide"]);
let kate = new Elephant("Kate", 234, ["writing letters", "stealing peanuts"]);
let micah = new Elephant("Micah", 143, ["trotting", "playing tic tac toe", "doing elephant ballet"]);

let herd = [ellie, charlie, kate, micah, pinky];

Elephant.prototype.paradeHelper = function() {
  console.log(`${this.name} is trotting by!`);
};
herd.forEach(elephant => console.log(elephant.paradeHelper()));
// Ellie is trotting by!
// undefined
// Charlie is trotting by!
// undefined
// Kate is trotting by!
// undefined
// Micah is trotting by!
// undefined
// Pinky is trotting by!
// undefined
