function Cat(name, owner) {
  this.name = name;
  this.owner = owner;
}
Cat.prototype.cuteStatement = function() {
  return `${this.owner} loves ${this.name}`;
};
Cat.prototype.meow = function() {
  return "meow";
};

let fuzzy = new Cat("Fuzzy", "Dominick");
let suki = new Cat("Suki", "Dadrev");
let wuzzy = new Cat("Wuzzy", "Madrev");

fuzzy.meow = function() {
  return "fuzzy says meow";
};

console.log(fuzzy.cuteStatement());
console.log(wuzzy.cuteStatement());
console.log(fuzzy.meow());
console.log(suki.meow());
